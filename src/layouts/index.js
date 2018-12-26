
import React, { Component } from 'react';
import { Layout, Menu, SubMenu, Icon } from 'antd';
import styles from './layout.module.scss'
const { Header, Sider, Content } = Layout;

{/* <Menu>
  <Menu.Item>菜单项</Menu.Item>
  <SubMenu title="子菜单">
    <Menu.Item>子菜单项</Menu.Item>
  </SubMenu>
</Menu> */}

const renderSubMenu =  ({ key, title, icon, link, sub, ...props }) => {
   return  sub && sub.length>0 ? 
   <SubMenu title={title} key={key || link}>
       {renderMenu(sub)}
   </SubMenu> 
   :
   <Menu.Item key="1">
       <Icon type="user" />
       <span>nav 1</span>
   </Menu.Item>

}

const renderMenu =  (menus) => {
    return menus.map(
        item => renderSubMenu(item) 
    )
}
// const renderMenu =  ({ menus, ...props }) => <Menu {...props}>
//     {menus && menus.map(
//         item => item.sub && item.sub.length ?
//             renderSubMenu(item) : renderMenuItem(item)
//     )}
//     </Menu>;
// const renderSubMenu =
// ({ key, title, icon, link, sub, ...props }) =>
//     <Menu.SubMenu
//         key={key || link}
//         title={
//             <span>
//                 {icon && <Icon type={icon} />}
//                 <span className="nav-text">{title}</span>
//             </span>
//         }
//         {...props}
//     >
//         {sub && sub.map(item => renderMenuItem(item))}
//     </Menu.SubMenu>;
































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
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className={styles.logo} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
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