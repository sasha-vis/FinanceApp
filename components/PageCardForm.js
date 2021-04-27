import DOM from './Dom.js';
import render from './Router.js';

class PageCardForm {
    constructor() {
        this.element = DOM.create('div');

        DOM.addClass(this.element, 'page_card_form');

        DOM.html(this.element, `
            <h3>Add your card</h3>
            <input type="text" name="name" placeholder="Your name">
            <input type="number" name="card_number" placeholder="Card full number">
            <input type="text" name="card_expiry" placeholder="Card expiry">
            <input type="number" name="card_secret" placeholder="Card secret number">
        `);

        const btnAddCard = DOM.create('button');
        DOM.addClass(btnAddCard, 'page_card_from_add');
        DOM.html(btnAddCard, 'Add card');
        DOM.append(this.element, btnAddCard);
        DOM.on(btnAddCard, 'click', this.addCard);
    }

    addCard(){
        const name = DOM.search(this.element, 'input[name="name"]');
        const card_number = DOM.search(this.element, 'input[name="card_number"]');
        const card_expiry = DOM.search(this.element, 'input[name="card_expiry"]');
        const card_secret = DOM.search(this.element, 'input[name="card_secret"]');

        if (!name || !card_number || !card_expiry || !card_secret) return;
        if(name.value.length == 0 || card_number.value.length == 0 || card_expiry.value.length == 0 || card_secret.value.length == 0) return;

        const cardInfo = {
            name: name.value,
            number: card_number.value,
            expiry: card_expiry.value,
            secret: card_secret.value
        }

        const cardInfoJson = JSON.stringify(cardInfo);
        
        localStorage.setItem('cardInfo', cardInfoJson);

        // render();

        location.reload();

    }

    render() {
        return this.element;
    }
};

const pageCardForm = new PageCardForm().render();
export default pageCardForm;