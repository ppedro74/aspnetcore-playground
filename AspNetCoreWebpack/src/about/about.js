import { log } from '../shared/log-util.js';
import { alerter } from '../shared/alert-util';

function component() {
    log("log about");

    const element = document.createElement('div');

    const h1 = document.createElement('h1');
    h1.innerHTML = 'about';

    element.appendChild(h1);
    return element;
}

document.body.appendChild(component());
alerter('you are in the about page');

