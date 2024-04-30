# display_html
## 概要

TyranoScript v5.00向けのプラグインです。（ES2015記法のため)

tyranoscriptのhtmlタグを使ったhtmlファイルを読み込んで表示させるタグです。

### 特徴

- HTMLファイルを読み込んで表示させたくて作った簡単なラッパーです。
- 'tyrano/html/'からのパスを指定できます。
- 読みこまれたHTMLのwidth,heightの100%は画面と同じサイズです。

## 使い方

display_htmlフォルダをそのままプロジェクトの「data/others/plugin/」に入れてください。

その後、first.ksに`@plugin name="display_html"`を追記してください。
この記述の直後からプラグインが使用できるようになります。

### タグ一覧

```
; htmlファイルを読み込んで全画面表示
; filenameはtyrano/html/からの相対パス
; htmlファイルで*endにジャンプさせる命令を書く必要がある
[display_html file="filename"]
```

お問合せ:
- mail: makiro.fuse@gmail.com
- twitter: [@makiro152](https://twitter.com/makiro152)