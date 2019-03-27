import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
//ReactDOM.render(<App />, document.getElementById('root'));


//官网文档state
// function Clock(props) {
//     return (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {props.Date.toLocaleTimeString()}.</h2>
//         </div>
//     )
// }
//将function clock改为class组件
// class Clock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             Date: new Date()
//         }
//     }
//     componentDidMount() {
//         this.timerID = setInterval(() => this.tick(), 1000)
//     }
//     componentWillUnmount() {
//         clearInterval(this.timerID)
//     }
//     tick() {
//         this.setState({
//             Date: new Date()
//         })
//     }
//     // handleClick(e) {
//     //     // e.preventDefault();
//     //     alert('哈哈哈')
//     // }
//     //测试阻止默认行为
//     // handleClick(e) {
//     //     e.preventDefault();
//     //     alert('The link was clicked.');
//     //   }
//     //测试this的绑定
//      handleClick() {
//        console.log('this:'+this);
//       }
//     render() {
//         return (
//             <div>
//                 <h1 onClick={this.handleClick}>Hello, world!</h1>
//                 <h2>It is {this.state.Date.toLocaleTimeString()}.</h2>
//                 <a href="https://www.baidu.com/" id="goBaidu" onClick={this.handleClick}>你点我试试</a>
//             </div>


//         )
//     }
// }



// ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
// );

//条件渲染
// function Welcome(){
//     return(
//         <h1>welcome</h1>
//     )
// }
// function Hello(){
//     return(
//         <h1>Hello</h1>
//     )
// }
// function Greeting(props){
//     if(props.isWelcome){
//         return <Welcome/>
//     }else{
//         return <Hello/>
//     }
// }
// ReactDOM.render(
//     <Greeting isWelcome={true}/>,
//     document.getElementById('root')
// );

function UserGreeting(){
    return <h1>Welcome back!</h1>
}
function GuestGreeting(){
    return <h1>Please sign in!</h1>
}
function Greeting(props){
    if(props.isLogin){
        return <UserGreeting/>
    }else{
        return <GuestGreeting/>
    }
}
function LoginButton(props){
    return(
        <button onClick={props.onClick}>Login</button>
    )
}
function LogoutButton(props){
    return(
        <button onClick={props.onClick}>Logout</button>
    )
}

class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLogin:false
        }
    }
    handleClickLogin(){
        this.setState({isLogin:true})
    }
    handleClickLogout(){
        this.setState({isLogin:false})
    }
    render(){
        let button;
            if(this.state.isLogin){
                button=<LogoutButton onClick={()=>this.handleClickLogout()}/>
            }else{
                button=<LoginButton onClick={()=>this.handleClickLogin()}/>
            }
        return(
            <div>
            <Greeting isLogin={this.state.isLogin}/>,
            {button}
            </div>
        )
    }
}

ReactDOM.render(
    <LoginControl/>,
    document.getElementById('root')
)
