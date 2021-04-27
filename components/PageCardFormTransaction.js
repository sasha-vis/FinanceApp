import DOM from './Dom.js';

class PageCardFormTransaction {
    constructor() {
        this.element = DOM.create('div');

        DOM.addClass(this.element, 'page_card_form_transaction');

        DOM.html(this.element, `
            <h3>Add transaction</h3>
           <input type="text" name="name" placeholder="Name transaction" />
           <input type="number" name="amount" placeholder="Amount" />
        `);

        const btnAddTransaction = DOM.create('button');
        DOM.addClass(btnAddTransaction, 'page_card_form_transaction_add');
        DOM.html(btnAddTransaction, 'Add');
        DOM.append(this.element, btnAddTransaction);
        DOM.on(btnAddTransaction, 'click', this.addTransaction);
    }

    addTransaction(){
        const name = DOM.search(this.element, 'input[name="name"]');
        const amount = DOM.search(this.element, 'input[name="amount"]');

        if (!name || !amount) return;
        if(name.value.length == 0 || amount.value.length == 0) return;

        let cardTransaction = localStorage.getItem('cardTransaction') || [];
        if (cardTransaction.length > 0) cardTransaction = JSON.parse(cardTransaction);

        const currentDate = new Date();

        cardTransaction.push({
            name: name.value,
            amount: amount.value,
            date: `${currentDate.getDate()}.${currentDate.getMonth()+1}.${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}`
        });

        const cardTransactionJson = JSON.stringify(cardTransaction);
        
        localStorage.setItem('cardTransaction', cardTransactionJson);

        location.reload();

    }

    render() {
        return this.element;
    }
};

const pageCardFormTransaction = new PageCardFormTransaction().render();
export default pageCardFormTransaction;