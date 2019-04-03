import React from 'react';
import ReactDOM from 'react-dom';
import ComponentHeader from './component/header';
import ComponentBody from './component/body';
import ComponentFooter from './component/footer';

class Index extends React.Component{
  render(){
    return(
      <div>
        <ComponentHeader/>
        <ComponentBody/>
        <ComponentFooter/>
      </div>
    )
  }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('example')
  );