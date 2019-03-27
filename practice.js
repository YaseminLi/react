//定义组件App,从React的Component方法中继承
import React from 'React';
class App extends React.Component { }
//或者
import React, { Component } from 'React';
class App extends Component {
    render() {
        return (
            //要显示的内容
            <div>
                {1+2};
                hello
            </div>
        );
    }
};
//组件导出
export default App;

function Welcome(props) {
    return(
        <h1>{props.name}</h1>
    )
}
class Welcome extends React.Component{
    render(){
        <h1>{props.name}</h1>
    }
}

import React from 'react';
import ReactDOM from 'react-dom';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  };
  const element = <Welcome name="Sara" />;

//________________________________________
ReactDOM.render(
    element,
    document.getElementById('root')
)

//提取组件
//提取avatar
function Avatar(props){
    return(
        <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
    )
}
//提取UserINFO
function UserInfo(props){
    return(
        <div className="UserInfo">
          <Avatar user={props.author}/>
          <div className="UserInfo-name">
            {props.user.name}
          </div>
        </div>
    )
}
function Comment(props) {
    return (
      <div className="Comment">
          <UserInfo user={props.author}/>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }