# deno_webextension-sample chrome 01

chrome 01は私の考えるChrome拡張の最小構成の確認です。
拡張の動作確認用にログ出力だけしています。

```bash
.
└── chrome
    └── 01
        ├── README.md --- これ
        └── app
            ├── js
            │   └── content.js --- Chrome拡張で実際に行う処理を書くJSファイル
            └── manifest.json --- Chrome拡張の設定ファイル
```

## manifest.json

```json
{
    "manifest_version":3,

    "name": "deno_webextension-sample-chrome-01",
    "description": "deno_webextension-sample/chrome/01",
    "version": "0.1",

    "content_scripts": [{
        "matches": [
            "<all_urls>"
        ],
        "run_at": "document_end",
        "js": ["js/content.js"]
    }]
}
```

## js/content.js

```js
console.log("run");
```

## install

1. Chromeを起動します。
2. [拡張機能](chrome://extensions/)で「パッケージ化されていない拡張機能を読み込む」を選択して、chrome/01/appフォルダを選択します。

正しく設定出来ていれば、拡張が有効になっている間は、サイトへのアクセス時にログとして「run」が出力されるようになります。
