/* eslint-disable no-undef */
import '../resource/layout.css'
import React from 'react';
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'

import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

export default class DefaultLayout extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="/home" icon={<UserOutlined />}>
              Home
            </Menu.Item>
            <Menu.Item key="/bills" icon={<UserOutlined />}>
              Bills
            </Menu.Item>
            <Menu.Item key="/items" icon={<UserOutlined />}>
              Items
            </Menu.Item>
            <Menu.Item key="/customers" icon={<UserOutlined />}>
              Customers
            </Menu.Item>
            <Menu.Item key="/logout" icon={<UserOutlined />}>
              Logout
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 10 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '10px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

ReactDOM.render(<DefaultLayout />, document.getElementById('root'));
