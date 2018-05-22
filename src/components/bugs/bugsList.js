"use strict";

var React = require('react');
var BugThumbnail = require('./bugThumbnail');

var createReactClass = require('create-react-class');
var BugsList = createReactClass({

    render: function()
    {
        var createBug = function(theBug)
        {
             return (
                <BugThumbnail bug={theBug} />
             );
        };

        return (
            <div class="container col-sm-12">
               <div class="row">
                 {this.props.bugs.map(createBug, this)}
               </div>
            </div>
        );
    }
});

module.exports = BugsList;