import DOM from './Dom.js';

import render from './Router.js';

class PageCard {
    constructor() {
        this.element = DOM.create('div');

        DOM.addClass(this.element, 'page_card');
        DOM.html(this.element, `
            <header class="header">
                <div class="container">

                    <h1>Debit card</h1>

                </div>
            </header>

            <main class="main">
                <div class="container">

                </div>
            </main>
        `);

        const cardInfoJson = localStorage.getItem('cardInfo');
        const self = this;

        import(cardInfoJson && cardInfoJson.length > 0 ? './PageCardBalance.js' : './PageCardForm.js')
        .then(function(module){
            const container = DOM.search(self.element, '.main .container');

            if (!container) return;

            DOM.append(container, module.default);
        });
    }

    render() {
        return this.element;
    }
};

const pageCard = new PageCard().render();

export default pageCard;