import React from 'react';
const FooterCss=require('../../css/footer.css');
class ComponentFooter extends React.Component{
    render(){
        console.log(FooterCss)
        return(
            <footer className={FooterCss.miniFooter}>
                <h1>这里是底部</h1>
            </footer>
        )
    }
}
export default ComponentFooter ;