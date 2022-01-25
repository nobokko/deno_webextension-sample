# deno_webextension-sample chrome 04

chrome 04はWebExtension APIを利用する処理を追加します。

コンテンツスクリプトで利用できるWebExtension APIは非常に限られています。

https://developer.mozilla.org/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#webextension_apis

ここではmanifestで権限付与が必要な「storage」を利用してみます。
アクセスしたページのurlをstorageに保持して、前回アクセスしたページと今回アクセスしたページのurlをログ出力します。

```bash
.
└── chrome
    └── 04
        ├── README.md --- これ
        ├── app
        │   ├── js
        │   │   └── content.js --- Chrome拡張で実際に行う処理が出力されたJSファイル
        │   └── manifest.json --- Chrome拡張の設定ファイル
        ├── deno.jsonc --- Denoの設定ファイル
        └── src
            └── content_scripts
                └── content.ts --- Chrome拡張で実際に行う処理を書くTSファイル
```

## content.ts

```ts
/// <reference lib="dom"/>

import browser from "webextension-polyfill";
// import browser from "https://esm.sh/webextension-polyfill@0.8.0";

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
```

## install

1. 以下を実行し、chrome/04/app/js/content.jsを更新します。
```bash
deno bundle --config chrome/04/deno.jsonc --importmap chrome/04/importmap.json chrome/04/src/content_scripts/content.ts chrome/04/app/js/content.js
```
2. Chromeを起動します。
3. [拡張機能](chrome://extensions/)で「パッケージ化されていない拡張機能を読み込む」を選択して、chrome/04/appフォルダを選択します。

正しく設定出来ていれば、拡張が有効になっている間は

* サイトへのアクセス時にログとして「前回アクセスしたページと今回アクセスしたページのurl」が出力される

ようになります。※この時点ではなりません、ならないことを確認するフェーズです。「storage: undefined」であることが確認できると思います。

manifest.jsonにpermissionsとstorageを追加します。

## manifest.json

```json
{
    "manifest_version": 3,
    "name": "deno_webextension-sample-chrome-04",
    "description": "deno_webextension-sample/chrome/04",
    "version": "0.4",
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
    "permissions": [
        "storage"
    ]
}
```


## install その2

1. 以下を実行し、chrome/04/app/js/content.jsを更新します。
```bash
deno bundle --config chrome/04/deno.jsonc --importmap chrome/04/importmap.json chrome/04/src/content_scripts/content.ts chrome/04/app/js/content.js
```
2. Chromeを起動します。
3. [拡張機能](chrome://extensions/)で「パッケージ化されていない拡張機能を読み込む」を選択して、chrome/04/appフォルダを選択します。

正しく設定出来ていれば、拡張が有効になっている間は

* サイトへのアクセス時にログとして「前回アクセスしたページと今回アクセスしたページのurl」が出力される

ようになります。