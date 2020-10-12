import DOM from './components/Dom.js';
import './components/Head.js';

import startPage from './components/StartPage.js';
import pageCard from './components/PageCard.js';
import pageTransaction from './components/PageTransaction.js';

class App {
    constructor() {
        
    };

    render() {
        DOM.addClass(pageTransaction, 'app');
        DOM.append(document.body, pageTransaction);
    };
};

new App().render();