var React = require('react');
var RouterDOM = require('react-router-dom');
var Switch = RouterDOM.Switch;
var Route = RouterDOM.Route;

var SummaryPage = require('./summary/summaryPage');
var BugsPage =  require('./bugs/bugsPage');
var ManageBugDetailsPage =  require('./bugs/manageBugDetails');
var ManagePersonDetailsPage = require('./people/managePersonDetails');
var PeoplePage = require('./people/peoplePage');

var createReactClass = require('create-react-class');
var RouteHandler = createReactClass({

    // main navigation mechanism  ..
    render: function()
    {
        return (
            <Switch>
                <Route exact path="/" component={SummaryPage} />
                <Route path="/bug/:bugid" component={ManageBugDetailsPage} />
                <Route path="/bug" component={ManageBugDetailsPage} />
                <Route path="/bugs" component={BugsPage} />
                <Route path="/people" component={PeoplePage} />
                <Route path="/person/:personid" component={ManagePersonDetailsPage} />
                <Route path="/person" component={ManagePersonDetailsPage} />
            </Switch>
        );
    }
});

module.exports = RouteHandler;
