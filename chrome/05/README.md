# deno_webextension-sample chrome 05

chrome 05は04の「前回アクセスしたページと今回アクセスしたページのurlをログ出力」という機能を強固にします。

React等で作成されたサイトの場合、ブラウザのURLが変わる操作を行っても04で作成した拡張機能では動作しません。
URLが変わったことを検知した際にcontent.jsを再度実行するように機能を追加します。

URLの検知は決め手が無いので今回はDOMに変更があった際にURLをチェックすることとします。
setInterval等で定時チェックするのは多少は有効かと思いますが間隔が広いとすり抜けます。間隔が狭いとパフォーマンスへの影響が懸念されます。
hashchangeイベントやpopstateイベントは今回の目的には使えませんでした。

[browser.tabs.executeScript](https://developer.mozilla.org/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript)(v2),[browser.scripting.executeScript](https://developer.chrome.com/docs/extensions/reference/scripting/)(v3)を使用すると再度実行が可能です。

これらのAPIはcontent_scriptsではmanifest.jsonに権限を付与しても実行する権限はありません。
また、content_scriptsで完結する形でtab idを取得するのも困難です。
このような場合は、backgroundで実行するのが定石なようです。

* content_scriptsでurl変更を検知する
* content_scriptsからbackgroundへbrowser.tabs.executeScriptを実行するよう依頼する
* backgroundでbrowser.tabs.executeScriptを実行する

という流れになります。

```bash
.
└── chrome
    └── 05
        ├── README.md --- これ
        ├── app
        │   ├── js
        │   │   ├── background.js --- Chrome拡張で実際に行う処理が出力されたJSファイル
        │   │   └── content.js --- Chrome拡張で実際に行う処理が出力されたJSファイル
        │   └── manifest.json --- Chrome拡張の設定ファイル
        ├── deno.jsonc --- Denoの設定ファイル
        ├── importmap.json --- Denoの設定ファイルその2
        └── src
            ├── background
            │   └── background.ts --- Chrome拡張で実際に行う処理を書くTSファイル(background)
            └── content_scripts
                └── content.ts --- Chrome拡張で実際に行う処理を書くTSファイル(content_scripts)
```

## manifest.json

```json
{
    "manifest_version": 3,
    "name": "deno_webextension-sample-chrome-05",
    "description": "deno_webextension-sample/chrome/05",
    "version": "0.5",
    "content_scripts": [
        {
            "matches": [
                "<all_urls>"
            ],
            "run_at": "document_end",
            "js": [
                "js/content.js"
            ]
        }
    ],
    "background": {
        "service_worker": "js/background.js",
        "type": "module"
    },
    "host_permissions": [
        "<all_urls>"
    ],
    "permissions": [
        "storage",
        "scripting"
    ]
}
```

## content.ts

```ts
/// <reference lib="dom"/>

import browser from "webextension-polyfill";
// import browser from "https://esm.sh/webextension-polyfill@0.8.0";
{
  const currentUrl = globalThis.location.href;
  const observerA = new MutationObserver(
    function (mutations: MutationRecord[], observer: MutationObserver) {
      console.log({ mutations, observer });
      if (currentUrl != globalThis.location.href) {
        observerA.disconnect();
        browser.runtime.sendMessage(undefined, {
          request: "browser.tabs.executeScript",
        });
      }
    },
  );
  observerA.observe(document, { childList: true, subtree: true });

  const storage = browser.storage;

  if (storage) {
    storage.local.get({ url: "(none)" }).then((prev_url) => {
      const url = globalThis.location.href;
      console.log({ prev_url, url });
      storage.local.set({ url });
    });
  } else {
    console.log({ storage });
  }
}
```

## background.ts

```ts
/// <reference lib="dom"/>

import browser from "webextension-polyfill";
// import browser from "https://esm.sh/webextension-polyfill@0.8.0";
browser.runtime.onMessage.addListener((message, sender) => {
  switch (message.request) {
    case "browser.tabs.executeScript":
      {
        console.log("browser.tabs.executeScript");
        browser.scripting.executeScript(
          {
            target: {
              tabId: sender.tab?.id!,
            },
            files: ["js/content.js"],
          },
        );
      }
      break;
  }
});
```

## install

1. 以下を実行し、chrome/05/app/js/content.jsを更新します。

```bash
deno bundle --config chrome/05/deno.jsonc --importmap chrome/05/importmap.json chrome/05/src/content_scripts/content.ts chrome/05/app/js/content.js
```

2. 以下を実行し、chrome/05/app/js/background.jsを更新します。

```bash
deno bundle --config chrome/05/deno.jsonc --importmap chrome/05/importmap.json chrome/05/src/background/background.ts chrome/05/app/js/background.js
```

3. Chromeを起動します。
4. [拡張機能](chrome://extensions/)で「パッケージ化されていない拡張機能を読み込む」を選択して、chrome/05/appフォルダを選択します。

正しく設定出来ていれば、拡張が有効になっている間は

- サイトへのアクセス時にログとして「前回アクセスしたページと今回アクセスしたページのurl」が出力される

ようになります。
