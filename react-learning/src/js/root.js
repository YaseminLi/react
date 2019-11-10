import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index';
import ComponentList from './component/list';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom'
class Root extends React.Component {
    render() {
        return (
            // <Router>
                <div>
                    <p>hello</p>
                    {/* <ul>
                        <li>
                            <Link to="/">Index</Link>
                        </li>
                        <li>
                            <Link to="/list">ComponentList</Link>
                        </li>
                    </ul>

                    <hr />
                    <Route exact path="/" component={Index} />
                    <Route path="/list" component={ComponentList} /> */}
                </div>
            // </Router>
        )
    }
}
ReactDOM.render(
    <Root />,
    document.getElementById('example')
);