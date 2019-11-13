import React from 'react';
import ReactDOM from 'react-dom';
import SetState from './setState'
import Props from './props/TemperatureContainer'

class Container extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>setState</h1>
                    <SetState />
                </div>
                <div>
                    <h1>组件之间的通信</h1>
                    <Props />
                </div>

            </div>
        )
    }
}
ReactDOM.render(
    <Container />,
    document.getElementById('root')
);
