import React from 'react';
import ReactDOM from 'react-dom';
import PCIndex from './component/pc_index';
import MobileIndex from './component/mobile_index';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';
class Root extends React.Component {
    render() {
        return (
            <div>
                <MediaQuery minDeviceWidth = { 1224 }>
               <PCIndex/>
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

