var React = require('react');

var BugStatus = require('../../api/bugs/bugDefs');
var PeopleApi = require('../../api/people/peopleApi');

var TextInput = require('../common/textInput');
var TextArea = require('../common/textArea');
var SelectInput = require('../common/selectInput');
var DateTimeDisplay = require('../common/dateTimeDisplay');

var createReactClass = require('create-react-class');
var BugDetailsPage = createReactClass({

    // TODO .. this is pretty hacky .. need to improve and replace ..
    getAllPeopleAsOptions : function() 
    {
        var fixedOptions = 
            '{ "text" : "Select ..",     "value" : 0 },' +
            '{ "text" : "Unassigned ..", "value" : 1 } ';

        var jsonValue = '[';
        jsonValue += fixedOptions;
        
        var people = PeopleApi.getAllPeople();
        for(var index=0;index<people.length;index++)
        {
            jsonValue += ',';

            var person = people[index];
            jsonValue += '{ '
            jsonValue += '"text" : ' + '"' + person.forename + " " + person.surname + '" ,' 
            jsonValue += '"value" : ' + person.id + ' ';
            jsonValue += '}';
        }

        jsonValue += ']';

        var dropdownOptions = JSON.parse(jsonValue);
        return dropdownOptions;
    },

    render : function()
    {
        var developerJson = this.getAllPeopleAsOptions();

        // var improve this too ..
        var statusJson = 
        [
            { 
                text : 'Select ..',
                value : BugStatus.Unselected,
            },
            { 
                text : 'Created',
                value : BugStatus.Created,
            },
            { 
                text : 'Active',
                value : BugStatus.Active,
            },
            { 
                text : 'Closed',
                value : BugStatus.Closed
            }
        ];

        var bug = this.props.bug;

        return (
           <form>
                <div className="container">
                    <div className="col-sm-6">
                        <h4>BugDetails</h4>

                        <div id="formdetail">
                            <TextInput label="Bug Title" 
                                       name="bugtitle"
                                       value={bug.bugtitle}
                                       onChange={this.props.onChangeTitle}
                                       error={this.props.errors.bugtitle}
                            />

                            <DateTimeDisplay label="Created on" 
                                       name="createddate"
                                       value={bug.createdDate}
                            />

                            <TextArea label="Description" 
                                       name="description"
                                       rowCount={3}
                                       value={bug.description}
                                       onChange={this.props.onChangeDescription}
                                       error={this.props.errors.description}
                            />

                            <SelectInput label="Bug status"
                                    name="status"
                                    value={bug.status}
                                    onChange={this.props.onChangeStatus}
                                    error={this.props.errors.status}
                                    options = {statusJson}
                            />

                            <SelectInput label="Assigned to"
                                    name="assignedTo"
                                    value={bug.assignedto}
                                    onChange={this.props.onChangeAssigned}
                                    error={this.props.errors.assignedto}
                                    options = {developerJson}
                            />

                            <DateTimeDisplay label="Last updated on" 
                                    name="lastupdateddate"
                                    value={bug.lastUpdatedDate}
                            />

                        </div>
                        <br/>

                        <input type="submit" value="Save" onClick={this.props.onSave} 
                           className="btn btn-primary"/>

                        <br/><br/><br/><br/>

                    </div>
                    <div className="col-sm-6"/>
                </div>
        </form>
       );
    }
});    

module.exports = BugDetailsPage;