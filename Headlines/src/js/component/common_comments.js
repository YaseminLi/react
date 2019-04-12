import React from 'react';
import { Input, Button } from 'antd';
import { Comment, Icon, Tooltip, Avatar, List } from 'antd';
import moment from 'moment';
const { TextArea } = Input;


export default class CommonComments extends React.Component {
    constructor() {
        super();
        this.state = {
            comments: ''
        }
    }
    componentDidMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({ comments: json });
            });
    }
    render() {
        const { comments } = this.state;
        const commentList = comments.length ?
            <List
                className="comment-list"
                header={`${comments.length} 条评论`}
                dataSource={comments}
                renderItem={item => (
                    <Comment
                        author={item.UserName}
                        content={item.Comments}
                        datetime={item.datetime}
                    />
                )}
            />
            : '没有加载到任何评论';
        const data = [];
        return (
            <div className='common_comments'>
                {commentList}
                <div className='input-comment'>
                    <p style={{ textAlign: "center" }}>您的评论:</p>
                    <TextArea rows={2} placeholder="请输入您的评论" />
                    <Button type="primary" style={{ margin: '10px auto', display: 'block' }}>提交评论</Button>
                </div>
            </div>
        )
    }
}