"use strict";

var React = require('react');
var ReactRouterDom = require('react-router-dom');
var Link = ReactRouterDom.Link;

var BugApi = require('../../api/bugs/bugApi');
var PeopleApi = require('../../api/people/peopleApi');
var BugStatus = require('../../api/bugs/bugDefs');

var createReactClass = require('create-react-class');
var SummaryPage = createReactClass({

    getInitialState : function()
    {
        return { bugs : [], people : [] };
    },

    componentWillMount : function()
    {
        this.setState( {
                         bugs : BugApi.getAllBugs(), 
                         people : PeopleApi.getAllPeople() 
                       }
                     );
    },

    render : function()
    {
        var bugs = this.state.bugs;
        var people = this.state.people;

        var createdBugs = BugApi.selectByStatus(bugs, BugStatus.Created);
        var createdBugsCount = createdBugs.length;

        var activeBugs =  BugApi.selectByStatus(bugs, BugStatus.Active);
        var activeBugsCount = activeBugs.length;

        var closedBugs = BugApi.selectByStatus(bugs, BugStatus.Closed);
        var closedBugsCount = closedBugs.length;

        var peopleCount = people.length;

        return (
            <div class="container">
              <h4>Summary</h4>
              
              <div id="summarypanel">
                    <p>
                        <i class="fa fa-bug"/>
                        There are {activeBugsCount} active bugs
                    </p>
                    <p>
                        <i class="fa fa-bug"/>
                        There are {createdBugsCount} inactive bugs
                    </p>
                    <p>
                        <i class="fa fa-bug"/>
                        There are {closedBugsCount} closed bugs
                    </p>
                    <p>
                        <i class="fa fa-user"/>
                        There are {peopleCount} people registered
                    </p>
              </div>
            </div>
        );
    }
});

module.exports = SummaryPage;
