import React from 'react';
import ReactDOM from 'react-dom';
import reactMixin from 'react-mixin';
import ComponentBodyChild from './bodychild';
import PropTypes from 'prop-types';
import Mixins from './mixins';

class ComponentBody extends React.Component{
    constructor(){
        super();
        this.state={
            name:"xiaoming",
            age:"20"
        }
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({age:100});
        //第一种方式，获取真实的DOM元素
        // const mySubmit=document.getElementById('submit');
        // console.log(mySubmit);
        // ReactDOM.findDOMNode(mySubmit).style.color='pink';

        //第二种方式，refs
        // console.log(this.refs.submit);
        this.refs.submit.style.color='orange';  
        Mixins.log(); 
    }
    handleChildInput(event){
        this.setState({age:event.target.value})
    }
    render(){ 
        //setTimeout(()=>{this.setState({name:'dafan'})},4000);
        return(
            <div>
                <h1>这里是页面内容</h1>
                <p>接收到的父页面的属性：username: {this.props.username} userage: {this.props.userage}</p>
                <p>age:{this.state.age}</p>
                <input id='submit' ref='submit' type='button' value='提交' onClick={this.handleClick}/>
                <ComponentBodyChild 
                    {...this.props} id={4} 
                    // handleChildInput={this.handleChildInput.bind(this)}/>
                    handleChildInput={()=>this.handleChildInput()}/>
            </div>
        )
    }
}
export default ComponentBody ;
ComponentBody.propTypes={
    userage:PropTypes.number.isRequired
}
ComponentBody.defaultProps = {
    username: 'xiaoming'
  };

  reactMixin(ComponentBody.prototype, Mixins);

  



//第7章
// import React from 'react';
// class ComponentBody extends React.Component{
//     render(){
//         const username='xiao ming';
//         const html='hello&nbsp;world';
//         return(
//             <div>
//                 <h1>这里是页面内容</h1>
//                 <p>{username===''?'用户名不存在':'用户名：'+username}</p>
//                 <input type='button' value="默认按钮" disabled={false}/>
//                 {/*登陆*/}
//                 <p>{html}</p>{/*需要进行Unicode转码*/}
//                 <p dangerouslySetInnerHTML={{__html:html}}></p>
//             </div>
//         )
//     }
// }
// export default ComponentBody ;