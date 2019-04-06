import React from 'react';
import ReactDOM from 'react-dom';
import ComponentHeader from './component/header';
import ComponentBody from './component/body';
import ComponentFooter from './component/footer';
import { DatePicker } from 'antd';
import { Button } from 'antd';
import 'antd/dist/antd.css'; 

class Index extends React.Component{
  render(){
    return(
      <div>
        <ComponentHeader/>
        <ComponentBody username={'xiaohong'} userage={8}/>
        <ComponentFooter/>
        <DatePicker />
        <Button type="danger">Danger</Button>
      </div>
    )
  }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('example')
  );