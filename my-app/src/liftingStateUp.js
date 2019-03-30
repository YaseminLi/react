//通过状态提升搭建两个输入框
import React from 'react';

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>
  }
  return <p>The water would  not boil.</p>
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

class TemperatureInput extends React.Component{
      handleInput(event) {
        //before:this.setState({temperature:event.target.value})
        this.props.onTemperatureChange(event.target.value);
      }
      render() {
          const scale=this.props.scale;
          const temperature=this.props.temperature;
        return (
          <form>
            <fieldset>
              <legend>Enter temperature in {scaleNames[scale]}:</legend>
              <input
                value={temperature}
                onChange={(event) => this.handleInput(event)} />
            </fieldset>
            <BoilingVerdict celsius={temperature} />
          </form>
        )
      }
}
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.state={
            temperature:'',
            scale:''
        }
    }
   handleCelsiusChange(temperature){
       this.setState({
        scale:'c',
        temperature
       })
   }
   handleFahrenheitChange(temperature){
    this.setState({
     scale:'f',
     temperature
    })
}
    render(){
        const temperature=this.state.temperature;
        const scale=this.state.scale;
        const celsius=scale==='f'?tryConvert(temperature,toCelsius):temperature;
        const fahrenheit=scale==='c'?tryConvert(temperature,toFahrenheit):temperature;
        return(
            <div>
            <TemperatureInput 
            scale='c'
            onTemperatureChange={(e)=>{this.handleCelsiusChange(e)}}
            temperature={celsius}
            />
            <TemperatureInput 
            scale='f'
            onTemperatureChange={(e)=>{this.handleFahrenheitChange(e)}}
            temperature={fahrenheit}
            />
            </div>
        )
    }
}
export default Calculator;