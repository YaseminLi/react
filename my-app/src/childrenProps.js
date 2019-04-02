import React from 'react';

function FancyBolder(props){
    return (
        <div className={"FancyBolder FancyBolder-"+props.color}>
            {props.children}
        </div>
    )
}

function WelcomeDialog(){
    return(
        <FancyBolder color='pink'>
            <h1 className='Dialog-title'>
                Welcome
            </h1>
            <p className='Dialog-message'>
                 Thank you for visiting our spacecraft!
            </p>
        </FancyBolder>
    )
}
export default WelcomeDialog;