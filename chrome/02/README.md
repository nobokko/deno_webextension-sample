# deno_webextension-sample chrome 02

chrome 02はjsファイルをtsファイルから作成する方式に変更します。
01と同様、拡張の動作確認用にログ出力だけしています。

```bash
.
└── chrome
    └── 02
        ├── README.md --- これ
        ├── app
        │   ├── js
        │   │   └── content.js --- Chrome拡張で実際に行う処理が出力されたJSファイル
        │   └── manifest.json --- Chrome拡張の設定ファイル
        └── src
            └── content.ts --- Chrome拡張で実際に行う処理を書くTSファイル
```

## content.ts

```ts
console.log("run");
```

## install

1. 以下を実行し、chrome/02/app/js/content.jsを更新します。
```bash
deno bundle chrome/02/src/content_scripts/content.ts chrome/02/app/js/content.js
```
2. Chromeを起動します。
3. [拡張機能](chrome://extensions/)で「パッケージ化されていない拡張機能を読み込む」を選択して、chrome/02/appフォルダを選択します。

正しく設定出来ていれば、拡張が有効になっている間は、サイトへのアクセス時にログとして「run」が出力されるようになります。
