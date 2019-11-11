import React from 'react';
import Child1 from './child1'
import Child2 from './child2'
export default class Parent extends React.Component {
    constructor() {
        this.state = {
            value: '父组件'
        }
    }
    render() {
        return (
            <div>
                我是父组件

                我是child1
                <Child1 value={this.state.value}/>
                我是child2
                <Child2 value={this.state.value}/>
            </div>

        )
    }
}