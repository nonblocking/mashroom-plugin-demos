
import app from './app.js';

const bootstrap = (portalAppHostElement, portalAppSetup, clientServices) => {
    const {appConfig: {message, pingButtonLabel}} = portalAppSetup;
    const {messageBus} = clientServices;
    app(portalAppHostElement, messageBus, message, pingButtonLabel);
};

window.startPlainES6DemoApp = bootstrap;
