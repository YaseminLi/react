import React from 'react';
function SplitPane(props){
    return(
        <div className='SplitPane'>
        <div className='Split-left'>{props.left}</div>
        <div className='Split-right'>{props.right}</div>
        </div>
    )
}
function App(){
    return(
        <SplitPane left={<Contacts/>} right={<Chat />}/>
    )
}
export default App;