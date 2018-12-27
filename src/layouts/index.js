
import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import styles from './layout.module.scss'
import Sider  from './Sider'
const { Header, Content } = Layout;
class CLayout extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  } 
  render() {
    return (
      <div className={ styles.layoutCustomTrigger }>
        <Layout  style={{ minHeight: '100vh' }}>
        <Sider collapsed={this.state.collapsed} {...this.props}/>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className={styles.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
          }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
      </div>   
    );
  }
}
export default CLayout