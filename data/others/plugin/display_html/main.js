(() => {
    const display = $('.display_html_layer');
    const TG = tyrano.plugin.kag;
    display.css({
        width:  TG.config.scWidth,
        height: TG.config.scHeight,
        'background-color': 'black'
    });
    const targetFile = TG.stat.mp.file ? `tyrano/html/${TG.stat.mp.file}` : 'data/others/plugin/display_html/error.html' 
    $.get(targetFile, (data) => {
        display.html(data);
    });
})();
