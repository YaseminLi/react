//表单中输入名字实时渲染，并可以提交且获取输入内容
//关键：onChange函数的传参
//     value值的显示通过state控制
import React from 'react';
import ReactDOM from 'react-dom';

class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state={value:''}
    }
    handleChange(event){
        this.setState({
            value:event.target.value
        })
    }
    handleSubmit(e){
        alert('提交的名字是：'+this.state.value);
        e.preventDefault();
    }
    render(){
        return(
            <form>
                <label>
                    名字：
                    <input 
                    type='text' 
                    value={this.state.value} 
                    //onChange事件必须在箭头函数中传入event
                    onChange={(event)=>this.handleChange(event)}/>
                </label>
                <input type='submit' value='提交' onClick={()=>this.handleSubmit()}/>
            </form>
        )
    }
}

ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
);