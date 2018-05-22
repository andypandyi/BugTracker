"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouterDom = require('react-router-dom');
var BrowserRouter = ReactRouterDom.BrowserRouter;

var App = require('./components/app');

var element = document.getElementById('app');
ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, element);


