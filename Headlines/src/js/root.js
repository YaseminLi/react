import React from 'react';
import ReactDOM from 'react-dom';
import PCIndex from './component/PC_index';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';
class Root extends React.Component {
    render() {
        return (
            <div>
               <PCIndex/>
            </div>
        );
    };
}
ReactDOM.render(
    <Root />, document.getElementById('mainContainer'));

