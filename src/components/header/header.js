var React = require('react');
var ReactRouterDom = require('react-router-dom');
var Link = ReactRouterDom.Link;

var createReactClass = require('create-react-class');
var Header = createReactClass({
    render: function()
    {
        return (
                 <div className="bugtracker">
                    <nav className="navbar navbar-expand-sm">
                        <Link to="/" className="navbar-brand">
                            <i className="fa fa-bug"/>
                        </Link>

                        <h4>BugTracker</h4>
                
                        <ul className="nav navbar-nav">
                            <li className="nav-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/bugs">Bugs</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/people">People</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            );
    }
});

module.exports = Header;