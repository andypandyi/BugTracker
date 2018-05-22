var React = require('react');
var ReactDom = require('react-dom');
var PropTypes = require('prop-types');

var createReactClass = require('create-react-class');
var TextInput = createReactClass({
    propTypes : {
        name : PropTypes.string.isRequired,
        label : PropTypes.string.isRequired,
        value : PropTypes.string.isRequired,
        onChange : PropTypes.func.isRequired,
        error : PropTypes.string.isRequired
    },

    render : function()
    {
       var wrapperClass = 'form-group';
       if (this.props.error && this.props.error.length > 0)
           wrapperClass += " " + 'has-error';

       return (
            <div className={wrapperClass}>
                <label htmlFor={this.props.name}>{this.props.label}:</label>
                <div className="field">
                    <input type="text" 
                        autoComplete="off"
                        className="form-control" 
                        placeholder={this.props.label} 
                        name={this.props.name}
                        value={this.props.value}
                        onChange={this.props.onChange} />
                </div>
                <div class="input">
                    {this.props.error}
                </div>
            </div>
       );
    }
});

module.exports = TextInput;    
