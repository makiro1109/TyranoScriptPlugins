const appendPop = (message) => {
    $('.complete-pop').remove();
    const html = `<div class="complete-pop"><img src="data/others/plugin/complete_pop/img/check.svg" />${message}</div>`;
    const pop = $(html);
    pop.appendTo($('.message0_fore')).addClass('cpop-anim');
    setTimeout(() => { pop.remove(); }, 5000);
}

const unboundDoSave = TYRANO.kag.menu.doSave;
const doSave = unboundDoSave.bind(TYRANO.kag.menu);

TYRANO.kag.menu.doSave = (t, a) => {
    doSave(t, a);
    setTimeout(() => { appendPop('セーブ完了') }, 500);
}

const unboundLoadGameData = TYRANO.kag.menu.loadGameData;
const loadGameData = unboundLoadGameData.bind(TYRANO.kag.menu);

TYRANO.kag.menu.loadGameData = (t, a) => {
    loadGameData(t, a);
    setTimeout(() => { appendPop('ロード完了') }, 500);
}