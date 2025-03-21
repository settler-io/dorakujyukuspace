# torecaswap-website

https://space.dorakujyuku.com で公開されているWebサイト。

## 構成

- public
  - GitHub Pages で公開されるファイル。
  - public/index.html が https://torecaswap.com/ に対応している。

## コードのフォーマット方法

以下のコマンドでフォーマットする。


```sh
npx prettier -w .
```

## デプロイ方法

mainブランチが変更されると、GitHub Actionsで自動でサイトが更新される。
