import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon, Modal, Button, Form } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
//import FormItem from 'antd/lib/form/FormItem';

// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
// const FormItem=Form.Item;

export default class PCHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            current: 'top',
            modalVisible: false,
            action: 'login',
            hasLogined: false,
            userNickName: 'xiaoming',
            userid: 0
        }
    }
    showModal(){
        this.setState({
            modalVisible:true
        })
    }
    handleOk(e){
        this.setState({
            modalVisible:false
        })
    }
    handleCancel(e){
        this.setState({
            modalVisible:false
        })
    }
    render() {
        //const {getFieldProps}=this.props.form;
        const userShow = this.state.hasLogined ?
            <MenuItem key='logout' className='register'>
                <Button type="primary" >{this.state.userNickName}</Button>
                &nbsp;&nbsp;
            <Button type="ghost" >个人中心</Button>
                &nbsp;&nbsp;
            <Button type="dashed" >退出</Button>
            </MenuItem>
            : <MenuItem key='register' className='register'>
                <Icon type='login' />注册/登录
            </MenuItem>;
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
                            {userShow}
                            <Modal
                                title="用户中心"
                                wrapClassName='vertical-center-modal'
                                visible={this.state.visible}
                                onOk={this.handleOk.bind(this)}
                                onCancel={this.handleCancel.bind(this)}
                            >
                    
                            </Modal>
                        </Menu>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
        )
    }
}