import DOM from './Dom.js';

class StartPage {
    constructor() {
        this.element = DOM.create('div');

        DOM.addClass(this.element, 'page_start');
        DOM.html(this.element, `
            <main class="main">
                <div class="container">

                <div class="page_start_image"></div>

                <h1>Finance App</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quaerat ea, ducimus necessitatibus dolore iure officia vero sapiente nam dolor deleniti laborum quam. Deleniti   accusamus consectetur earum illum laborum velit.</p>
                <button class="page_start_button">Get started</button>

                </div>
            </main>
        `);
    }

    render() {
        return this.element;
    }
};

const startPage = new StartPage().render();

export default startPage;