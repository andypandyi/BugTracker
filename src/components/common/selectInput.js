var React = require('react');
var ReactDom = require('react-dom');

var createReactClass = require('create-react-class');
var SelectInput = createReactClass({
    render : function()
    {
       var wrapperClass = 'form-group';
       if (this.props.error && this.props.error.length > 0)
           wrapperClass += " " + 'has-error';

       return (
            <div className={wrapperClass}>
                <label htmlFor={this.props.name}>{this.props.label}:</label>
                <div className="field">
                    <select value={this.props.value}
                            class="form-control" 
                            name={this.props.name}
                            onChange={this.props.onChange}>
                            {
                                this.props.options.map((opt, i) =>
                                <option value={opt.value}>{opt.text}</option>) 
                            }
                    </select>
                </div>
                <div class="input">
                    {this.props.error}
                </div>
            </div>
       );
    }
});

module.exports = SelectInput;    
