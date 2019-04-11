import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import PCIndex from './component/pc_index';
import MobileIndex from './component/mobile_index';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';
import PCNewsDetails from './component/pc_news_details'
class Root extends React.Component {
    render() {
        return (
            <div>
                <MediaQuery minDeviceWidth = { 1224 }>
                <Router>
                    <Route path='/' component={PCIndex}></Route>
                    <Route path='/details/:uniquekey' component={PCNewsDetails}></Route>
                </Router>
               </MediaQuery>
               <MediaQuery maxDeviceWidth = { 1224 }>
               <MobileIndex/>
               </MediaQuery>
            </div>
        );
    };
}
ReactDOM.render(
    <Root />, document.getElementById('mainContainer'));

