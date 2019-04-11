import React from 'react';
import {Row,Col} from 'antd';
export default class PCNewsDetails extends React.Component{
    constructor(){
        super();
        this.state={
            newsItem:''
        }
    }
    //页面加载完再附进去
    componentDidMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey='+this.props.params.uniquekey, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({ newsItem: json });
                document.title=this.state.newsItem.title+'-React News | React 驱动的新闻平台'
            });
    }
    createMarkup(){
        return{__html:this.state.newsItem.pagecontent}
    }
    render(){
        return(
            <div>
                <Row>
                    <Col sapn={2}></Col>
                    <Col sapn={14} className='container'>
                    <div className='articleContainer' dangerouslySetInnerHTML={this.createMarkup()}></div>
                    </Col>
                    <Col sapn={6}></Col>
                    <Col sapn={2}></Col>
                </Row>
            </div>
        )
    }
}