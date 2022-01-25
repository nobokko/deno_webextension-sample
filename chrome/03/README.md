# deno_webextension-sample chrome 03

chrome 03はDOMを操作する処理を追加します。
ページを開いた際にbodyの背景色を（#00000088）に変更します。

```bash
.
└── chrome
    └── 03
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

## deno.jsonc

```json
{
    "compilerOptions": {
        "lib": [
            "dom",
            "deno.ns"
        ]
    }
}
```

## content.ts

```ts
/// <reference lib="dom"/>

console.log("run");

const element_body = globalThis.document.querySelector('body')!;
element_body.style.backgroundColor = '#00000088';
```

## install

1. 以下を実行し、chrome/03/app/js/content.jsを更新します。
```bash
deno bundle --config chrome/03/deno.jsonc chrome/03/src/content_scripts/content.ts chrome/03/app/js/content.js
```
2. Chromeを起動します。
3. [拡張機能](chrome://extensions/)で「パッケージ化されていない拡張機能を読み込む」を選択して、chrome/03/appフォルダを選択します。

正しく設定出来ていれば、拡張が有効になっている間は
* サイトへのアクセス時にログとして「run」が出力され
* 開いたページのbodyタグのstyleに変化がある（サイトの構成により必ず色が変わるという保障は無いです）
ようになります。

