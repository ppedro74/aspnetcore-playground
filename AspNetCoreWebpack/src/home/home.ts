import { alerter } from '../shared/alert-util';

function component(): HTMLElement {
    const div = document.createElement('div') as HTMLDivElement;

    const h1 = document.createElement('h1') as HTMLElement;
    h1.innerHTML = 'home';

    div.appendChild(h1);
    return div;
}

document.body.appendChild(component());

alerter('you are in the home page');

