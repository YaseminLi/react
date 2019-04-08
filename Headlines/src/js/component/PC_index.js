import React from 'react';
import PCHeader from './PC_header'
import PCFooter from './PC_footer';

export default class PCIndex extends React.Component {
    render() {
        return (
            <div>
           <PCHeader/>
           <PCFooter/>
           </div>
        )
    }
}