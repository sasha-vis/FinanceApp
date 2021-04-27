import DOM from './Dom.js';

const render = function () {

    document.body.innerHTML = '';

    if (location.href.indexOf(`.html`) != -1) location.href = location.origin;

    const page = location.hash.length > 0 ? location.hash.substr(1) : '';
    const infoModule = {
        name: 'startPage',
        path: './StartPage.js'
    };

    switch (page) {
        case 'cards':
            infoModule.name = 'pageCard';
            infoModule.path = './PageCard.js';
        break;
        case 'transactions':
            infoModule.name = 'pageTransaction';
            infoModule.path = './PageTransaction.js';
        break;
    }
    
    import(infoModule.path)
    .then(function(module){
        DOM.addClass(module.default, 'app');
        DOM.append(document.body, module.default);
    });
};

export default render;