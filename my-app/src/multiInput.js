import React from 'react';
import ReactDOM from 'react-dom';

class MultiInput extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isGoing:true,
            numberofGuest:2
            }
    }
    handleInput(event){
      const target=event.target;
      const name=target.name;
      const value=target.type==='checkbox'?
              target.checked:target.value;
        this.setState({
            [name]:value
        })
    }
    render(){
        return(
            <form>
                <label>参与：
                    <input 
                    name='isGoing'
                    checked={this.state.isGoing} 
                    type='checkbox' 
                    onChange={(event)=>this.handleInput(event)}/>
                </label>
                <br />
                <label>来宾人数：
                    <input 
                    name='numberofGuest'
                    type='number' 
                    value={this.state.numberofGuest} 
                    onChange={(event)=>this.handleInput(event)}/>
                </label>
            </form>
        )
    }
}
ReactDOM.render(
    <MultiInput />,
    document.getElementById('root')
);