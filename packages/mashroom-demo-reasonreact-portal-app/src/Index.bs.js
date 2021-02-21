'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var App$MashroomPortalDemoReasonreactApp = require("./App.bs.js");

var container = document.getElementById("container");

function bootstrap(portalAppHostElement, portalAppSetup, clientServices) {
  ReactDom.render(React.createElement(App$MashroomPortalDemoReasonreactApp.make, {
            appConfig: portalAppSetup.appConfig,
            messageBus: clientServices.messageBus
          }), portalAppHostElement);
  return {
          willBeRemoved: (function (param) {
              console.log("Ummounting React app");
              ReactDom.unmountComponentAtNode(portalAppHostElement);
              
            })
        };
}

window.startReasonReactDemoApp = bootstrap;

exports.container = container;
exports.bootstrap = bootstrap;
/* container Not a pure module */
