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
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Date: new Date()
        }
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timerID)
    }
    tick() {
        this.setState({
            Date: new Date()
        })
    }
    // handleClick(e) {
    //     // e.preventDefault();
    //     alert('哈哈哈')
    // }
    //测试阻止默认行为
    // handleClick(e) {
    //     e.preventDefault();
    //     alert('The link was clicked.');
    //   }
    //测试this的绑定
     handleClick() {
       console.log('this:'+this);
      }
    render() {
        return (
            <div>
                <h1 onClick={this.handleClick}>Hello, world!</h1>
                <h2>It is {this.state.Date.toLocaleTimeString()}.</h2>
                <a href="https://www.baidu.com/" id="goBaidu" onClick={this.handleClick}>你点我试试</a>
            </div>


        )
    }
}



ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);

