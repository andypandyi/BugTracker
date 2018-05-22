$ = jQuery = require('jquery');

var React = require('react');
var Header = require('./header/header');
var RouteHandler = require('./routeHandler');

var createReactClass = require('create-react-class');
var App = createReactClass({

    render: function()
    {
        return (
            <div>
                <Header />
                <RouteHandler />
            </div>
        );
    }
});

module.exports = App;





