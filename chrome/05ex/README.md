# deno_webextension-sample chrome 05ex

05で複数のjsファイルを出力する必要が出てきました。
毎回各々を出力するコマンドを実行してもよいのですが、この後も出力するファイルは増えていきます。

そこでchrome 05exでは05のインストール時に作成するjsの作業をDenonを利用して簡素化します。

通常は以下のコマンドを用いることでdenonを導入可能だと思います。（なお筆者は今のところこちらのコマンドで導入できたことがありません）
denoがdeno.jsonを読み込んで想定外の動作をすることがあり得るため、deno.json等が無いディレクトリで実行することをおススメします。

```bash
deno install -qAf --unstable https://deno.land/x/denon/denon.ts
```

エラーする場合は以下のコマンドで導入出来るかもしれません。（筆者もこちらでは導入できています）

```bash
deno install -qAf --unstable https://raw.githubusercontent.com/denosaurs/denon/main/denon.ts
```

```bash
.
└── chrome
    └── 05ex
        ├── README.md --- これ
        ├── app
        │   ├── js
        │   │   ├── background.js --- Chrome拡張で実際に行う処理が出力されたJSファイル
        │   │   └── content.js --- Chrome拡張で実際に行う処理が出力されたJSファイル
        │   └── manifest.json --- Chrome拡張の設定ファイル
        ├── deno.jsonc --- Denoの設定ファイル
        ├── importmap.json --- Denoの設定ファイルその2
        ├── scripts.json --- Denonの設定ファイル
        └── src
            ├── background
            │   └── background.ts --- Chrome拡張で実際に行う処理を書くTSファイル(background)
            └── content_scripts
                └── content.ts --- Chrome拡張で実際に行う処理を書くTSファイル(content_scripts)
```

## scripts.json

```json
{
  "$schema": "https://deno.land/x/denon@2.4.9/schema.json",
  "scripts": {
    "build": [
      {
        "cmd": "deno bundle --config chrome/05ex/deno.jsonc --importmap chrome/05ex/importmap.json chrome/05ex/src/content_scripts/content.ts chrome/05ex/app/js/content.js",
        "desc": "js/content.js",
        "watch": false
      },
      {
        "cmd": "deno bundle --config chrome/05ex/deno.jsonc --importmap chrome/05ex/importmap.json chrome/05ex/src/background/background.ts chrome/05ex/app/js/background.js",
        "desc": "js/content.js",
        "watch": false
      }
    ]
  }
}
```

## install

1. 以下を実行し、chrome/05ex/app/js/content.js、chrome/05ex/app/js/background.jsを更新します。

```bash
denon --config chrome/05ex/scripts.json build
```

2. Chromeを起動します。
3. [拡張機能](chrome://extensions/)で「パッケージ化されていない拡張機能を読み込む」を選択して、chrome/05ex/appフォルダを選択します。

正しく設定出来ていれば、拡張が有効になっている間は

- サイトへのアクセス時にログとして「前回アクセスしたページと今回アクセスしたページのurl」が出力される

ようになります。
