//news共用的部分
import React from 'react';
import { Carousel, Row, Col, Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import PCNewsClock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';
export default class PCNewsContainer extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 100,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
        };
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className='container'>
                        <div className='leftContainer'>
                            <div className='carousel' >
                                <Carousel {...settings}>
                                    <div><img src='./src/images/carousel_1.jpg' /></div>
                                    <div><img src='./src/images/carousel_2.jpg' /></div>
                                    <div><img src='./src/images/carousel_3.jpg' /></div>
                                    <div><img src='./src/images/carousel_4.jpg' /></div>
                                </Carousel>
                            </div>
                            <PCNewsImageBlock count='6' type='guoji' cardtitle='国际新闻' cardwidth='112px' />
                        </div>
                        <Tabs className='tabs_news'>
                            <TabPane tab='头条新闻' key='1'>
                                <PCNewsClock count='5' type='top' width="400px" bordered="false" />
                            </TabPane>
                            <TabPane tab='娱乐新闻' key='2'>
                                <PCNewsClock count='5' type='yule' width="400px" bordered="false" />
                            </TabPane>
                        </Tabs>
                        <div>
                        <PCNewsImageBlock count='6' type='yule' cardtitle='娱乐新闻' width='100%' cardwidth='112px' />
                        <PCNewsImageBlock count='6' type='yule' cardtitle='娱乐新闻' width='100%' cardwidth='112px' />
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>

            </div>

        )
    }
}