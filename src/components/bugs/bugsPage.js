"use strict";

var React = require('react');
var ReactRouterDom = require('react-router-dom');
var Link = ReactRouterDom.Link;

var BugApi = require('../../api/bugs/bugApi');
var BugStatus = require('../../api/bugs/bugDefs');
var BugsList = require('./bugsList');

var createReactClass = require('create-react-class');
var BugsPage = createReactClass({

    getInitialState : function()
    {
        return { bugs : [] };
    },

    componentDidMount : function()
    {
        this.setState({ bugs : BugApi.getAllBugs() });
    },
    
    render : function()
    {
        var bugs = this.state.bugs;

        var createdBugs = BugApi.selectByStatus(bugs, BugStatus.Created);
        var createdBugsCount = createdBugs.length;

        var activeBugs =  BugApi.selectByStatus(bugs, BugStatus.Active);
        var activeBugsCount = activeBugs.length;

        var closedBugs = BugApi.selectByStatus(bugs, BugStatus.Closed);
        var closedBugsCount = closedBugs.length;

        return (
            <div class="container">
                <h4>Bugs</h4>
                <br/>
                <Link to="/bug" className="btn btn-primary">Add a bug</Link>
                <br/><br/>

                <h4>Active bugs: {activeBugsCount}</h4>
                <BugsList bugs={activeBugs} />

                <br/>

                <h4>Created bugs: {createdBugsCount}</h4>
                <BugsList bugs={createdBugs} />

                <br/>

                <h4>Closed bugs: {closedBugsCount}</h4>
                <BugsList bugs={closedBugs} />
            </div>
        );
    }
});

module.exports = BugsPage;