import DOM from './Dom.js';

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

                    <div class="page_card_balance">
                        <h3>Your balance</h3>
                        <div class="balance">$24,2568.20</div>
                        <button class="page_card_add_button">+</button>
                    </div>

                    <div class="page_card_photo">
                        <img src="/assets/images/card_photo.png" alt="#">
                    </div>

                </div>
            </main>
        `);
    }

    render() {
        return this.element;
    }
};

const pageCard = new PageCard().render();

export default pageCard;