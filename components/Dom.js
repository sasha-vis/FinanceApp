export default class DOM {
    static search = function(element, selector) {

        if (typeof element === 'string') {
            selector = element;
            element = undefined;
        }

        if (!element) element = document;

        let result = element.querySelectorAll(selector);

        if (result.length == 1) return result[0];
        return result;
    };

    static create = function(name){
        return document.createElement(name);
    }

    static attr = function(element, name, value){
        if (!element || !name) return;
        if (value != undefined && value != '') element.setAttribute(name, value);
        else return element.getAttribute(name);
    }

    static append = function(toElement, element, beforeElement){
        if (!toElement || !element) return;

        if (!beforeElement) toElement.appendChild(element);
        else toElement.insertBefore(element, beforeElement);
    };

    static html = function(element, html) {
        if (!element || !html) return;

        element.innerHTML = html;
    }

    static addClass = function(element, name) {

        if (!element || !name) return;

        element.classList.add(name);
    };

    static removeClass = function(element, name) {

        if (!element || !name) return;

        element.classList.remove(name);
    };

    static toggleClass = function(element, name) {

        if (!element || !name) return;

        element.classList.toggle(name);
    };

    static hasClass = function(element, name) {

        if (!element || !name) return;

        return element.classList.contains(name);
    };
};