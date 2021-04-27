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

                </div>
            </main>
        `);

        const button = DOM.create('button');
        DOM.addClass(button, 'page_start_button');
        DOM.html(button, 'Get started');
        const container = DOM.search(this.element, '.container');

        if(container) {
            DOM.append(container, button);
        }

        DOM.on(button, 'click', this.getStarted);
    }

    getStarted = function (event){
        location.hash = '#cards';
    };

    render() {
        return this.element;
    }
};

const startPage = new StartPage().render();

export default startPage;