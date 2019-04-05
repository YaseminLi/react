import React from 'react';
class ComponentBodyChild extends React.Component{
    render(){
        return(
            <div>
                <p>请在子页面输入：<input type='text' onChange={this.props.handleChildInput}/></p>
                <p>{this.props.username} {this.props.userage} {this.props.id}</p>
            </div>
        )
    }
}
export default ComponentBodyChild;