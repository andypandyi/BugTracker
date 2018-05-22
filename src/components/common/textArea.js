var React = require('react');
var ReactDom = require('react-dom');

var createReactClass = require('create-react-class');
var TextArea = createReactClass({
    render : function()
    {
       var wrapperClass = 'form-group';
       if (this.props.error && this.props.error.length > 0)
           wrapperClass += " " + 'has-error';

       return (
            <div className={wrapperClass}>
                <label htmlFor={this.props.name}>{this.props.label}:</label>
                <div className="field">
                    <textarea class="form-control" 
                        rows="this.props.rows" 
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

module.exports = TextArea;    
