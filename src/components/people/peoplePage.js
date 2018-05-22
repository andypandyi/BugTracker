var React = require('react');
var ReactRouterDom = require('react-router-dom');
var Link = ReactRouterDom.Link;

var PeopleApi = require('../../api/people/peopleApi');

var createReactClass = require('create-react-class');
var PeoplePage = createReactClass({

    componentWillMount : function()
    {
        this.setState({ people : PeopleApi.getAllPeople() });
    },

    render : function()
    {
        var createRow = function(person)
        {
             return (
                <tr>
                    <td>{person.forename}</td>
                    <td>{person.surname}</td>
                    <td>
                        <Link to={'/person/' + person.id} className="btn btn-primary">Edit</Link>
                    </td>
                </tr>
             );
        };

        return (
            <div class="container">
                <h4>People</h4>
                <br/><br/>
                
                <Link to="/person" className="btn btn-primary">Add new person</Link>
                <br/><br/>

                <table class="table">
                    <thead class="thead-light">
                        <tr>
                            <th>Forename(s)</th>
                            <th>Surname</th>
                            <th></th>
                        </tr>
                    </thead>
                
                    <tbody>
                        { this.state.people.map(createRow, this) }
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = PeoplePage;