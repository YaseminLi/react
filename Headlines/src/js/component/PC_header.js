import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class PCHeader extends React.Component {
    constructor(){
        super();
        this.state={
            current:'top'
        }
    }
    render() {
        return (
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href='/' className='logo'>
                            <img src='./src/images/logo.png' alt='logo图片未加载' />
                            <span>ReactNews</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu mode='horizontal' selectedKeys={[this.state.current]}>
                            <MenuItem key='top'> <Icon type="appstore" />头条</MenuItem>
                            <MenuItem key='guonei'> <Icon type="appstore" />国内</MenuItem>
                            <MenuItem key='shehui'> <Icon type="appstore" />社会</MenuItem>
                            <MenuItem key='yule'> <Icon type="appstore" />娱乐</MenuItem>
                            <MenuItem key='tiyu'> <Icon type="appstore" />体育</MenuItem>
                            <MenuItem key='jiankang'> <Icon type="appstore" />健康</MenuItem>
                            <MenuItem key='shishang'> <Icon type="appstore" />时尚</MenuItem>
                            <MenuItem key='jiating'> <Icon type="appstore" />家庭</MenuItem>
                            <MenuItem key='jiaoyu'> <Icon type="appstore" />教育</MenuItem>
                        </Menu>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
        )
    }
}