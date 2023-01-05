//在文本框输入文章内容并提交
//textarea标签的使用
import React from 'react';
import ReactDOM from 'react-dom';

class EssayForm extends React.Component{
    constructor(props){
        super(props);
        this.state={value:'请在此处输入文章内容'}
    }
    handleChange(event){
        this.setState({
            value:event.target.value
        })
    }
    handleSubmit(e){
        alert('提交的文章是：'+this.state.value);
        e.preventDefault();
    }
    render(){
        return(
            <form>
                <label>
                    文章：
                    <textarea
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
    <EssayForm />,
    document.getElementById('root')
);