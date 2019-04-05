import React from 'react';
const FooterCss=require('../../css/footer.css');
class ComponentHeader extends React.Component{
    constructor(){
        super();
        this.state={
            miniHeader:false
        }
    }
    switchHeader(){
        this.setState({
            miniHeader:!this.state.miniHeader
        })
    }
    render(){
        const styleComponentHeader={
            header:{
                backgroundColor:'purple',
                color:(this.state.miniHeader)?"red":"blue",
                paddingTop:(this.state.miniHeader)?"3px":"15px"
            }
            //还可以定义其他样式
        }
        return(
            <header 
            //style={styleComponentHeader.header} 
            //className='smallFontSize' 
            className={FooterCss.miniFooter}
            onClick={this.switchHeader.bind(this)}>
                <h1>这里是头部</h1>
            </header>
        )
    }
}
export default ComponentHeader ;