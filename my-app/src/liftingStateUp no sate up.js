import React from 'react';
// import ReactDOM from 'react-dom';


function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>
  }
  return <p>The water would  not boil.</p>
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: ''
    }
  }
  handleInput(event) {
    const target=event.target;
    const name=target.name;
    const value=name==='CelsiusTemperature'?target.value:(target.value-32)*5/9;
    this.setState({
      temperature:value
    })
  }
  render() {
    const FahrenheitTemperature=this.state.temperature===''?'':this.state.temperature*9/5+32;
    return (
      <form>
        <fieldset /*将表单内的相关元素，legend为标题*/>
          <legend>Enter temperature in Celsius:</legend>
          <input 
            name='CelsiusTemperature'
            value={this.state.temperature}
            onChange={(event) => this.handleInput(event)} />
        </fieldset>

        <fieldset >
          <legend>Enter temperature in Fahrenheit:</legend>
          <input 
            name='FahrenheitTemperature'
            value={FahrenheitTemperature}
            onChange={(event) => this.handleInput(event)} />
        </fieldset>
        <BoilingVerdict celsius={this.state.temperature} />
      </form>
    )
  }
}

//一个温度输入框
// function BoilingVerdict(props){
//     if(props.celsius>=100){
//         return <p>The water would boil.</p>
//     }
//     return <p>The water would  not boil.</p>
// }

// class Calculator extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             temperature:''
//         }
//     }
//     handleInput(event){
//         this.setState({
//             temperature:event.target.value
//         })
//     }
//     render(){
//         return(
//                 <fieldset /*将表单内的相关元素，legend为标题*/>
//                 <legend>Enter temperature in Celsius:</legend>
//                     <input type='text' 
//                         value={this.state.temperature}
//                         onChange={(event)=>this.handleInput(event)}/>
//                 <BoilingVerdict celsius={this.state.temperature} />
//                 </fieldset>
//         )
//     }
// }
export default Calculator;