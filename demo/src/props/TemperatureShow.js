import React from 'react'
export default class TemperatureShow extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        if(this.props.temperature >38) {
            return <p>温度：<span style={{color:'#f50',fontSize:'18px'}}>热</span></p>
        }else if(this.props.temperature<=38 && this.props.temperature >=0){
            return <p>温度：<span style={{color:'#0098f4'}}>正合适</span></p>
        }else {
            return <p>温度：<span style={{color:'#333'}}>冷</span></p>
        }
    }
}