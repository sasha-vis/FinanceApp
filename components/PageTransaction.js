import DOM from './Dom.js';

class PageTransaction {
    constructor() {
        this.element = DOM.create('div');

        DOM.addClass(this.element, 'page_transaction');

        let cardTransaction = localStorage.getItem('cardTransaction') || [];
        if (cardTransaction.length > 0) cardTransaction = JSON.parse(cardTransaction);

        let listTransactionHtml = '';

        cardTransaction.forEach(function(transaction){
            listTransactionHtml += `
            <li>
                <div class="icon"></div>
                <div class="info">
                    <div class="name">${transaction.name}</div>
                    <div class="date">${transaction.date}</div>
                </div>
                <div class="cost">${transaction.amount}</div>
            </li>
            `;
        });

        const changeLocation = function () {
            location.href = '/FinanceApp/#cards';
        }

        DOM.html(this.element, `
            <header class="header">
                <div class="container">

                    <button class="page_transaction_back_button" onClick='${changeLocation}'><</button>
                    <h1>Transactions</h1>

                </div>
            </header>

            <main class="main">
                <div class="container">

                    <ul class="page_transaction_list">
                    ${listTransactionHtml}
                    </ul>

                </div>
            </main>
        `);
    }

    render() {
        return this.element;
    }
};

const pageTransaction = new PageTransaction().render();

export default pageTransaction;