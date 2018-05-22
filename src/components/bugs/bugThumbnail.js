"use strict";

var React = require('react');
var ReactRouterDom = require('react-router-dom');
var Link = ReactRouterDom.Link;
var PropTypes = require('prop-types');

var isNullOrUndefined = require('util').isNullOrUndefined;

var BugStatus = require('../../api/bugs/bugDefs')
var PeopleApi = require('../../api/people/peopleApi');

var createReactClass = require('create-react-class');
var BugThumbnail = createReactClass({
    propTypes : {
        bug : PropTypes.object.isRequired
    },

    getStatusDetail : function(bug)
    {
        if (bug.status == BugStatus.Active)
        {
            return {
                status_class : 'bg-info',
                status_text : 'Active',
                status_fa_class : 'fa fa-check',
            };
        }

        if (bug.status == BugStatus.Closed)
        {
            return {
                status_class : 'bg-success',
                status_text : 'Closed',
                status_fa_class : 'fa fa-check-square',
            };
        }

        return {
            status_class : 'bg-secondary',
            status_text : 'Created',
            status_fa_class : 'fa fa-edit',
        };
    },

    getAssignedTo : function()
    {
        var personId = this.props.bug.assignedto;
        if (personId == null)
            return 'Unassigned';

        var selectedPerson = PeopleApi.getPersonById(personId);
        if (isNullOrUndefined(selectedPerson))
            return 'Unassigned';
            
        var name = PeopleApi.formatName(selectedPerson);
        return name;
    },

    render: function()
    {
        var statusDetail = this.getStatusDetail(this.props.bug);
        var assignedTo = this.getAssignedTo();

        return (
            <div className="bug col-sm-3">
                <div className="card">
                    <div className={statusDetail.status_class}>
                      <i className={statusDetail.status_fa_class}/>
                      <span className="statustext">{statusDetail.status_text}</span>
                    </div>
                    <div className="card-body">
                        <p className="card-title">
                            <i className="fa fa-bug"/>
                            <span title={this.props.bug.bugtitle}>{this.props.bug.bugtitle}</span>
                        </p>
                        <p className="card-text">                      
                          <i className="fa fa-user"/>
                          <span>{assignedTo}</span>
                        </p>
                        
                        <Link to={'/bug/' + this.props.bug.id}  className="btn btn-primary">View</Link>
                        <br/>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = BugThumbnail;