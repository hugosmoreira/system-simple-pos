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
  HomeOutlined,
  CopyOutlined,
  UnorderedListOutlined,
  LoginOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

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
          <div className="logo"><h3>PointOfSale</h3></div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={window.location.pathname}>
            <Menu.Item key="/home" icon={<HomeOutlined />}>
                <a href="home">Home</a>
            </Menu.Item>
            <Menu.Item key="/bills" icon={<CopyOutlined />}>
              <a href="/bills">Bills</a>
            </Menu.Item>
            <Menu.Item key="/items" icon={<UnorderedListOutlined />}>
            <a href="/items">Items</a>
            </Menu.Item>
            <Menu.Item key="/customers" icon={<UserOutlined />}>
              <a href="/customers">Customers</a>
            </Menu.Item>
            <Menu.Item key="/logout" icon={<LoginOutlined />} onClick={()=>{
            localStorage.removeItem('pos-user')
            navigate('/login')
          }}>
              <a href="/logout">Logout</a>
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
