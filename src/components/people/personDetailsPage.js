var React = require('react');

var TextInput = require('../common/textInput');

var createReactClass = require('create-react-class');
var PersonDetailsPage = createReactClass({

    render : function()
    {
       return (
        <form>
            <br/>
            <div className="container">
              <div className="col-sm-6">
                <h4>Person Details</h4>

                <div id="formdetail">
                    <TextInput label="Forename" 
                               name="forename"
                               value={this.props.person.forename}
                               onChange={this.props.onChangeForename}
                               error={this.props.errors.forename} />

                    <TextInput label="Surname" 
                               name="surname"
                               value={this.props.person.surname}
                               onChange={this.props.onChangeSurname}
                               error={this.props.errors.surname} />

                </div>

                <input type="submit" value="Save"  onClick={this.props.onSave} className="btn btn-primary"/>
             </div>
             <div className="col-sm-6"></div>
          </div>
        </form>

       );
    }
});    

module.exports = PersonDetailsPage;