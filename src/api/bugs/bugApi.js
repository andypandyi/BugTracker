"use strict";

var isNullOrUndefined = require('util').isNullOrUndefined;

//This file is mocking a web API by hitting hard coded data.
var bugs = require('./bugData').bugsData;
var _ = require('lodash');
var _bugId = 10;

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(bug) {
    var nextBugId = ++_bugId;
    return nextBugId;
};

var _clone = function(item) {
	if (isNullOrUndefined(item))
		return null;
		
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var BugsApi = {
	getAllBugs: function() {
		return _clone(bugs); 
	},

	getBugById: function(bugid) {
		var selectedBug = _.find(bugs, function(o) { return o.id == bugid });
		return _clone(selectedBug);
	},

	createEmpty : function()
	{
		var newBug = 
        {
            id: null, 
            status : 0,
            bugtitle : '',
            description : '',
			assignedto : null,
            createdDate : new Date().valueOf(),
			lastUpdatedDate : new Date().valueOf()
		};
		
		return newBug;
	},

	onBugUpdate : function(bug)
	{
        bug.lastUpdatedDate = new Date().valueOf();
	},

	selectByStatus : function(bugs, selectedStatus)
	{
		var selectedBugs = bugs.filter(function(b) { return b.status == selectedStatus});
		return selectedBugs;
	},
	
	saveBug: function(bug) {
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the author to the DB via AJAX call...');
		
		if (bug.id) {
			var bugid = bug.id;
			var existingBugIndex = _.indexOf(bugs, _.find(bugs, function(o) { return o.id == bugid })); 
			bugs.splice(existingBugIndex, 1, bug);
		} 
		else 
		{
			//Just simulating creation here.
			//The server would generate ids for new authors in a real app.
			//Cloning so copy returned is passed by value rather than by reference.
			bug.id = _generateId(bug);
			bugs.push(bug);
		}

		return _clone(bug);
	},

	deleteBug: function(id) {
		console.log('Pretend this just deleted the author from the DB via an AJAX call...');
		_.remove(bugs, { id: id});
	}
};

module.exports = BugsApi;