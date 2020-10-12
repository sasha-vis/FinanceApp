import DOM from './Dom.js';

class PageTransaction {
    constructor() {
        this.element = DOM.create('div');

        DOM.addClass(this.element, 'page_transaction');
        DOM.html(this.element, `
            <header class="header">
                <div class="container">

                    <button class="page_transaction_back_button"><</button>
                    <h1>Transactions</h1>

                </div>
            </header>

            <main class="main">
                <div class="container">

                    <ul class="page_transaction_list">
                        <li>
                            <div class="icon"></div>
                            <div class="info">
                                <div class="name">Transaction name 1</div>
                                <div class="date">11 Oct 2020, 17:00</div>
                            </div>
                            <div class="cost">-110.52</div>
                        </li>
                        <li>
                            <div class="icon"></div>
                            <div class="info">
                                <div class="name">Transaction name 2</div>
                                <div class="date">12 Oct 2020, 17:00</div>
                            </div>
                            <div class="cost">-120.52</div>
                        </li>
                        <li>
                            <div class="icon"></div>
                            <div class="info">
                                <div class="name">Transaction name 3</div>
                                <div class="date">13 Oct 2020, 17:00</div>
                            </div>
                            <div class="cost">-130.52</div>
                        </li>
                        <li>
                            <div class="icon"></div>
                            <div class="info">
                                <div class="name">Transaction name 4</div>
                                <div class="date">14 Oct 2020, 17:00</div>
                            </div>
                            <div class="cost">-140.52</div>
                        </li>
                        <li>
                            <div class="icon"></div>
                            <div class="info">
                                <div class="name">Transaction name 5</div>
                                <div class="date">15 Oct 2020, 17:00</div>
                            </div>
                            <div class="cost">-150.52</div>
                        </li>
                        <li>
                            <div class="icon"></div>
                            <div class="info">
                                <div class="name">Transaction name 1</div>
                                <div class="date">11 Oct 2020, 17:00</div>
                            </div>
                            <div class="cost">-110.52</div>
                        </li>
                        <li>
                            <div class="icon"></div>
                            <div class="info">
                                <div class="name">Transaction name 2</div>
                                <div class="date">12 Oct 2020, 17:00</div>
                            </div>
                            <div class="cost">-120.52</div>
                        </li>
                        <li>
                            <div class="icon"></div>
                            <div class="info">
                                <div class="name">Transaction name 3</div>
                                <div class="date">13 Oct 2020, 17:00</div>
                            </div>
                            <div class="cost">-130.52</div>
                        </li>
                        <li>
                            <div class="icon"></div>
                            <div class="info">
                                <div class="name">Transaction name 4</div>
                                <div class="date">14 Oct 2020, 17:00</div>
                            </div>
                            <div class="cost">-140.52</div>
                        </li>
                        <li>
                            <div class="icon"></div>
                            <div class="info">
                                <div class="name">Transaction name 5</div>
                                <div class="date">15 Oct 2020, 17:00</div>
                            </div>
                            <div class="cost">-150.52</div>
                        </li>
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