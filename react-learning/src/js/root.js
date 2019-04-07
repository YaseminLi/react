import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index';
import ComponentList from './component/list';
import {Router,Route,hashHistory} from 'react-router';
class Root extends React.Component{
    render(){
        return(
            <div>
                <Index/>
               
            </div>
        )
    }
}
ReactDOM.render(
    <Root/>,
    document.getElementById('example')
  );