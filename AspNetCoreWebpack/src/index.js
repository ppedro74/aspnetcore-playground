import { Log } from './shared/log-util.js';

function component() {
    const element = document.createElement('div');

    const h1 = document.createElement('h1');
    h1.innerHTML = 'index';

    element.appendChild(h1);
    return element;
}

document.body.appendChild(component());