import React from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import { Tabs, Row, Col, List } from 'antd';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const TabPane = Tabs.TabPane;
export default class PCUserCenter extends React.Component {
    constructor() {
        super();
        this.state = {
            usercollection: '',
            usercomments: ''
        }
    }
    componentDidMount() {
        const myFetchOptions = {
            method: 'GET'
        }
        fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=' + localStorage.userId, myFetchOptions)
            .then(response => response.json())
            .then(json => (this.setState({ usercollection: json })))
        fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=' + localStorage.userId, myFetchOptions)
            .then(response => response.json())
            .then(json => (this.setState({ usercomments: json })))
    }

    render() {
        const { usercollection, usercomments } = this.state;
        const usercollectionList = usercollection.length ?
            <List
                size="large"
                bordered
                dataSource={usercollection}
                renderItem={item =>
                    (<List.Item
                        key={item.uniquekey}
                        extra={
                            <BrowserRouter>
                                <Link to={`details/${item.uniquekey}`} target='_blank'>
                                    <span className='ucdetails'>查看</span>
                                </Link>
                            </BrowserRouter>}>
                        <p>{item.Title}</p>
                    </List.Item>)}
            />
            : '您还没有收藏文章';
        const usercommentsList = usercomments.length ?
            <List
                size="large"
                bordered
                dataSource={usercomments}
                renderItem={item =>
                    (<List.Item
                        extra={
                            <BrowserRouter>
                                <Link to={`details/${item.uniquekey}`} target='_blank'>
                                    <span className='ucdetails'>查看</span>
                                </Link>
                            </BrowserRouter>}>
                        <List.Item.Meta
                            title={'于' + item.datetime + '发表了评论' + item.uniquekey}
                            description={item.Comments}
                        /></List.Item>)}
            />
            : '您还没有评论任何文章';
        return (
            <div className='pcuccenter'>
                <PCHeader />
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <Tabs>
                            <TabPane tab='我的收藏列表' key='1'>
                                {usercollectionList}
                            </TabPane>
                            <TabPane tab='我的评论列表' key='2'>
                                {usercommentsList}
                            </TabPane>
                            <TabPane tab='头像设置' key='3'>3</TabPane>
                        </Tabs>
                    </Col>
                    <Col span={2}></Col>
                </Row>

                <PCFooter />
            </div>
        )
    }
}