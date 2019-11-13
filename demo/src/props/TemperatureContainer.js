import React from 'react'
import TemperatureShow from './TemperatureShow'
import TemperatureInput from './TemperatureInput'
export default class TemperatureContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: ''
        };
    }
    handleTemp (temperature){
        this.setState({
            temperature:temperature
        })
    };
    render() {
        let temperature = this.state.temperature;
        return (
            <div>
                <TemperatureInput temperature={temperature} onTemperateChange={this.handleTemp.bind(this)}/>
                <TemperatureShow  temperature={temperature} />
            </div>
        )
    }
}