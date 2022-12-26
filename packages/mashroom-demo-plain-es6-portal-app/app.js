
import state from './state.js';

const html = `
    <div class='mashroom-demo-plain-es6-app'>
        <h4>Plain ES6 Demo App</h4>
        <p>This is an App written with plain ES6 modules</p>
        <div>
            <button>
                Send Ping
            </button>
            <span>Received pings: <span>0</span></span>
        </div>
    </div>
`;

export default (hostElement, messageBus, message, pingButtonLabel) => {
    const template = document.createElement('template');
    template.innerHTML = html;
    const appNode = template.content.firstElementChild;
    if (message) {
        appNode.children.item(1).innerText = message;
    }
    if (pingButtonLabel) {
        appNode.children.item(2).firstElementChild.innerText = pingButtonLabel;
    }
    appNode.children.item(2).firstElementChild.addEventListener('click', () => {
        messageBus.publish('ping', {});
    });
    state.onCountUpdate(() => {
        appNode.children.item(2).lastElementChild.lastElementChild.innerText = String(state.count);
    });
    messageBus.subscribe('ping', () => {
        state.count ++;
    });
    hostElement.innerHTML = '';
    hostElement.appendChild(appNode);
};
