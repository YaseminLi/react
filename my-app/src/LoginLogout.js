import React from 'react';
import ReactDOM from 'react-dom';

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