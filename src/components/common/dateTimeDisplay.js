var React = require('react');
var ReactDom = require('react-dom');
var PropTypes = require('prop-types');

var createReactClass = require('create-react-class');
var DateTimeDisplay = createReactClass({
    propTypes : {
        name : PropTypes.string.isRequired,
        label : PropTypes.string.isRequired,
        value : PropTypes.string.isRequired,
    },

    leftPad : function(value)
    {
        if (value < 10)
            return '0' + value;
        else
            return value;
    },

    // TODO: replace with a proper formatting library like 'moment' ..
    getFormattedDate : function(dateValue)
    {
        var day = dateValue.getDate();
        var month = dateValue.getMonth() + 1;
        var years = dateValue.getFullYear();

        var hours = dateValue.getHours();
        var minutes = dateValue.getMinutes();
        var seconds = dateValue.getSeconds();

        var formattedText = this.leftPad(day) + '/' + this.leftPad(month) + '/' + years + ', ' +
                            this.leftPad(hours) + ':' + this.leftPad(minutes) + ':' + this.leftPad(seconds);
        return formattedText;
    },

    render : function()
    {
       var dateMilliseconds = this.props.value;
       var dateValue = new Date(dateMilliseconds);
       var dateTextValue = this.getFormattedDate(dateValue);

       return (
            <div className='form-group'>
                <label htmlFor={this.props.name}>{this.props.label}:</label>
                <div className="field">
                    <input type="text" 
                        readOnly="true"
                        className="form-control" 
                        placeholder={this.props.label} 
                        name={this.props.name}
                        value={dateTextValue}
                    />
                </div>
            </div>
       );
    }
});

module.exports = DateTimeDisplay;    
