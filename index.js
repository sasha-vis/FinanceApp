import render from './components/Router.js';

import './components/Head.js';
import DOM from './components/Dom.js';

render();

DOM.on(window, 'hashchange', render);