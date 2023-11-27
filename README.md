# torecaswap-website

https://torecaswap.com/ で公開されているWebサイト。

## 構成

- public
  - S3に直接アップロードしてWebサイトとしてホスティングするためのファイルを管理するフォルダ。このフォルダの内容がS3のバケットの内容と同じになり、Webサイトとして全てホスティングされる。

## コードのフォーマット方法

以下のコマンドでフォーマットする。

```sh
npx prettier -w .
```

## デプロイ方法

AWS CLIを使ってS3にファイルをデプロイするようにしている。
手順は以下。

1. AWSクレデンシャルの設定
2. S3_BUCKET_PATH の設定
3. デプロイコマンドの実行

### 1. AWSクレデンシャルの設定

AWS CLIを使うための環境変数を設定する。この手順は一般的なAWS CLIの使い方と同じ。

```sh
export AWS_ACCESS_KEY_ID=
export AWS_SECRET_ACCESS_KEY=
export AWS_SESSION_TOKEN=
```

### 2. S3_BUCKET_PATH の設定

devとprodでS3のパスが異なるため、環境変数を使ってどちらにデプロイするかを切り替える。

```sh
# dev
S3_BUCKET_PATH=s3://496217581614-dev-torecaswap-com
# prod
S3_BUCKET_PATH=s3://523724343874-torecaswap-com
```

### 3. デプロイコマンドの実行

以下のコマンドを実行することで、S3のバケットにローカルのファイルが同期される。

```sh
aws s3 sync ./public $S3_BUCKET_PATH --acl public-read
```
