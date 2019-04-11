//每个板块的新闻页面

import React from 'react';
import { List, Avatar, Icon } from 'antd';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default class MobileList extends React.Component {
    constructor() {
        super();
        this.state = {
            news: ''
        }
    }
    componentWillMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({ news: json });
            });
    }
    render() {
        const { news } = this.state;
        console.log(news);

        const newList = news.length
            ?
            <List
                itemLayout="horizontal"
                dataSource={news}
                renderItem={item => (
                    <List.Item>
                        <img src={item.thumbnail_pic_s}/>
                        <List.Item.Meta
                            // avatar={<Avatar src={item.thumbnail_pic_s} shape= "square" size={100}/>}
                            title={<a href="_blank">{item.title}</a>}
                            description={<p><span className='moble_list_realtype'>{item.realtype}</span>{'\u0020'+item.date}</p>
                                }
                        />
                    </List.Item>
                )}
            />
            : '没有加载到任何新闻';

        return (
            <div>{newList}</div>
        )
    }
}