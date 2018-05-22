var React = require('react');
var ReactRouter = require('react-router');

var PersonDetailsPage = require('./personDetailsPage');
var PersonApi = require('../../api/people/peopleApi');

var createReactClass = require('create-react-class');
var ManagePersonDetailsPage = createReactClass({

    getOrCreatePerson : function(personId)
    {
        var person;
        if (personId != null)
            person = PersonApi.getPersonById(personId);
        else
            person = PersonApi.createEmpty();

        return person;
    },

    getInitialState : function()
    {
        return { person : null, errors : {} };
    },

    componentWillMount : function()
    {
        var personId = this.props.match.params.personid;
        var selectedPerson = this.getOrCreatePerson(personId);

        this.setState({person : selectedPerson});
    },

    handleChangeForename : function(event)
    {
        this.handleChange(event, function(p, v) { p.forename = v });
    },

    handleChangeSurname : function(event)
    {
        this.handleChange(event, function(p, v) { p.surname = v });
    },

    handleChange : function(event, updateFunc)
    {
        var updatedValue = event.target.value;
        var person = this.state.person;
        updateFunc(person, updatedValue);

        this.setState({person : person})
    },

    validate : function()
    {
       var isValid = true;
       var person = this.state.person;

       var errors = {};

       if (person.forename == null || person.forename.length == 0)
       {
            errors.forename = "Forename is required";
            isValid = false;
       }

       if (person.surname == null || person.surname.length == 0)
       {
            errors.surname = "Surname is required";
            isValid = false;
       }

       this.setState({errors : errors});
       return isValid;
    },

    handleSave : function(event)
    {
        event.preventDefault();

        if (!this.validate())
             return;

        var person = this.state.person;
        PersonApi.savePerson(person);

        // transition ...
        this.props.history.push('/people')
    },

    render : function()
    {
        return (
            <PersonDetailsPage 
                person={this.state.person} 
                onChangeForename={this.handleChangeForename}
                onChangeSurname={this.handleChangeSurname}
                onSave={this.handleSave}
                errors={this.state.errors}
            />
        );
    }
});    

module.exports = ManagePersonDetailsPage;
