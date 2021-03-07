'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ReasonSvg = require("./reason.svg");

((require('./App.scss')));

var icon = ReasonSvg;

function App(Props) {
  var appConfig = Props.appConfig;
  var messageBus = Props.messageBus;
  var match = React.useState(function () {
        return 0;
      });
  var setPing = match[1];
  var onClick = function (param) {
    return Curry._2(messageBus.publish, "ping", {
                dummy: 42
              });
  };
  React.useEffect((function () {
          Curry._2(messageBus.subscribe, "ping", (function (param) {
                  return Curry._1(setPing, (function (prevPing) {
                                return prevPing + 1 | 0;
                              }));
                }));
          return (function (param) {
                    return Curry._1(messageBus.unsubscribe, "ping");
                  });
        }), []);
  return React.createElement("div", {
              className: "mashroom-demo-reasonreact-app"
            }, React.createElement("div", {
                  className: "demo-reason-icon",
                  dangerouslySetInnerHTML: {
                    __html: icon
                  }
                }), React.createElement("div", {
                  className: "demo-reason-react-app-content"
                }, React.createElement("h4", undefined, "Reason-React Demo App"), React.createElement("p", undefined, "Hello " + (appConfig.firstName + "!")), React.createElement("div", undefined, React.createElement("button", {
                          onClick: onClick
                        }, "Send Ping"), React.createElement("span", undefined, "Received pings: " + String(match[0])))));
}

var make = App;

exports.icon = icon;
exports.make = make;
/*  Not a pure module */
