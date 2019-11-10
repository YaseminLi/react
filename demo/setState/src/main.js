import React from 'react';
import ReactDOM from 'react-dom';
import One from './setState'

class Container extends React.Component {
    render() {
        return (
            <div>
             <One />
            </div>
        )
    }
}
ReactDOM.render(
    <Container />,
    document.getElementById('root')
);
