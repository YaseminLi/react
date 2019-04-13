import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import { Tabs, Row, Col } from 'antd';

const TabPane = Tabs.TabPane;
export default class PCUserCenter extends React.Component {
    render() {
        return (
            <div>
                <PCHeader />
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <Tabs>
                            <TabPane tab='我的收藏列表' key='1'>1</TabPane>
                            <TabPane tab='我的评论列表' key='2'>2</TabPane>
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