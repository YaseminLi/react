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