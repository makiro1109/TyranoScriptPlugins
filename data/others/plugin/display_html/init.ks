; [display_html file="filename"]
; filenameはtyrano/html/からの相対パス
; htmlファイルで*endにジャンプさせる命令を書く必要がある
[macro name='display_html']
[html name='display_html_layer']
[endhtml]
[loadjs storage='plugin/display_html/main.js']
[s]
*end
[cm]
[endmacro]

[return]
