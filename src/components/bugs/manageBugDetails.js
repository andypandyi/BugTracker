var React = require('react');
var ReactRouter = require('react-router');

var BugDetailsPage = require('./bugDetailsPage');
var BugApi = require('../../api/bugs/bugApi');

var createReactClass = require('create-react-class');
var ManageBugDetailsPage = createReactClass({

    getOrCreateBug : function(bugId)
    {
        var bug;
        if (bugId != null)
            bug = BugApi.getBugById(bugId);
        else
            bug = BugApi.createEmpty();

        return bug;
    },

    getInitialState : function()
    {
        return { bug : null, errors : {} };
    },

    componentWillMount : function()
    {
        var bugId = this.props.match.params.bugid;
        var selectedBug = this.getOrCreateBug(bugId);

        this.setState({bug : selectedBug});
    },

    handleChangeTitle : function(event)
    {
        this.handleChange(event, function(b, v) { b.bugtitle = v });
    },

    handleChangeDescription : function(event)
    {
        this.handleChange(event, function(b, v) { b.description = v });
    },

    handleChangeStatus : function(event)
    {
        this.handleChange(event, function(b, v) { b.status = v });
    },

    handleChangeAssigned : function(event)
    {
        this.handleChange(event, function(b, v) { b.assignedto = v });
    },

    handleChange : function(event, updateFunc)
    {
        var updatedValue = event.target.value;

        var bug = this.state.bug;
        updateFunc(bug, updatedValue);

        // update the date here ... change lastupdated :-)
        BugApi.onBugUpdate(bug);

        this.setState({bug : bug})
    },

    validate : function()
    {
       var isValid = true;
       var bug = this.state.bug;

       var errors = {};

       if (bug.bugtitle == null || bug.bugtitle.length == 0)
       {
            errors.bugtitle = "Title is required";
            isValid = false;
       }

       if (bug.description == null || bug.description.length == 0)
       {
            errors.description = "Description is required";
            isValid = false;
       }

       // zero = default / "select .." value
       if (bug.status == null || bug.status == 0)
       {
            errors.status = "Bug status is required";
            isValid = false;
       }

       // zero = default / "select .." value
       if (bug.assignedto == null || bug.assignedto == 0)
       {
            errors.assignedto = "AssignedTo is required";
            isValid = false;
       }

       this.setState({ errors : errors });
       return isValid;
    },

    handleSave : function(event)
    {
        event.preventDefault();

        if (!this.validate())
             return;

        var bug = this.state.bug;
        BugApi.saveBug(bug);

        // transition ... need to check on this again ..
        this.props.history.push(`/bugs`)
    },

    render : function()
    {
        return (
            <BugDetailsPage bug={this.state.bug} 
                            onChangeTitle={this.handleChangeTitle}
                            onChangeDescription={this.handleChangeDescription}
                            onChangeStatus={this.handleChangeStatus}
                            onChangeAssigned={this.handleChangeAssigned}
                            onSave={this.handleSave}
                            errors={this.state.errors}
            />
        );
    }
});    

module.exports = ManageBugDetailsPage;
