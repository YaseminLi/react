import React from 'react';

class Todolist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            inputValue: ''
        }
    }
    handleClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    handleInput(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    handleIndex(){
        
    }
    render() {
        return (
            <div>
                <div>
                    <input
                        value={this.state.inputValue}
                        onChange={(e) => this.handleInput(e)}
                    />
                    <button onClick={() => this.handleClick()}>add</button>
                </div>
                <ul>
                    {this.state.list.map(
                        (item, index) =>
                            <li key={index} onClick={()=>this.handleIndex()}>{item}</li>)}
                </ul>
            </div>
        )
    }
}

export default Todolist;