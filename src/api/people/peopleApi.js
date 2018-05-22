"use strict";

var isNullOrUndefined = require('util').isNullOrUndefined;

//This file is mocking a web API by hitting hard coded data.
var people = require('./peopleData').peopleData;
var _ = require('lodash');
var _peopleId = 15;

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(person) {
    var nextPersonId = ++_peopleId;
    return nextPersonId;
};

var _clone = function(item) {
	if (isNullOrUndefined(item))
	    return null;
	    
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var PeopleApi = {
	getAllPeople: function() {
		return _clone(people); 
	},

	getPersonById: function(personid) {
		var selectedPerson = _.find(people, function(o) { return o.id == personid });
		return _clone(selectedPerson);
	},

	formatName : function(person)
	{
		var formatted = person.forename + " " + person.surname;
		return formatted;
	},

	createEmpty : function()
	{
		var newPerson = 
        {
			id: null, 
			forename : '',
			surname : '',
		};
		
		return newPerson;
	},

	savePerson: function(person) {
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the author to the DB via AJAX call...');
		
		if (person.id) {
			var personid = person.id;
			var existingPersonIndex = _.indexOf(people, _.find(people, function(o) { return o.id == personid })); 
			people.splice(existingPersonIndex, 1, person);
		} else {
			//Just simulating creation here.
			//The server would generate ids for new authors in a real app.
			//Cloning so copy returned is passed by value rather than by reference.
			person.id = _generateId(person);
			people.push(person);
		}

		return _clone(person);
	},

	deletePerson: function(id) {
		console.log('Pretend this just deleted the author from the DB via an AJAX call...');
	   _.remove(people, { id: id});
	}
};

module.exports = PeopleApi;
