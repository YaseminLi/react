import React from 'react';
import ReactDOM from 'react-dom';

class FlavorForm extends React.Component{
    constructor(props){
        super(props);
        this.state={value:'cocount'}
    }
    handleChange(event){
        this.setState({
            value:event.target.value
        })
    }
    handleSubmit(e){
        alert('你喜欢的风味是：'+this.state.value);
        e.preventDefault();
    }
    render(){
        return(
            <form>
                <label>
                    选择你喜欢的风味：
                    <select value={this.state.value} onChange={(event)=>this.handleChange(event)}>
                    <option value="mango">芒果</option>
                    <option value="cocount">椰子</option>
                    <option value="lime">柠檬</option>
                    <option value="apple">苹果</option>
                    </select>
                </label>
                <input type='submit' value='提交' onClick={()=>this.handleSubmit()}/>
            </form>
        )
    }
}

ReactDOM.render(
    <FlavorForm />,
    document.getElementById('root')
);