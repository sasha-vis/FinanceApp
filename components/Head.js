import DOM from './Dom.js';

const title = DOM.create('title');
DOM.html(title, 'Finance App');
DOM.append(document.head, title);

const metaCharset = DOM.create('meta');
DOM.attr(metaCharset, 'charset', 'UTF-8');
DOM.append(document.head, metaCharset);

const metaViewport = DOM.create('meta');
DOM.attr(metaViewport, 'name', 'viewport');
DOM.attr(metaViewport, 'content', 'width=device-width, initial-scale=1.0');
DOM.append(document.head, metaViewport);

const linkFont = DOM.create('link');
DOM.attr(linkFont, 'rel', 'stylesheet');
DOM.attr(linkFont, 'href', 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;1,400;1,600&display=swap');
DOM.append(document.head, linkFont);

const linkCss = DOM.create('link');
DOM.attr(linkCss, 'rel', 'stylesheet');
DOM.attr(linkCss, 'href', '/css/style.css');
DOM.append(document.head, linkCss);
