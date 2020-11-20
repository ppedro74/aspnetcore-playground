"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var alert_util_1 = require("../shared/alert-util");
function component() {
    var div = document.createElement('div');
    var h1 = document.createElement('h1');
    h1.innerHTML = 'home';
    div.appendChild(h1);
    return div;
}
document.body.appendChild(component());
alert_util_1.alerter('you are in the home page');
//# sourceMappingURL=home.js.map