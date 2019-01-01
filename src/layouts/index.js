
import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import { connect } from 'react-redux'
import Sider  from './Sider'
import Content  from './Content'
import styles from './layout.module.scss'

const { Header } = Layout;
const routerObj2 = [
  {
      id: "2",
      parentId: "0",
      menuName: "开发备注",
      component: "Index",
      icon: "user",
      path: "test"
  },
  {
      id: "1",
      parentId: "0",
      menuName: "权限",
      component: "Index",
      icon: "user",
      path: "permission"
  },
  {
      id: "1024",
      parentId: "1",
      menuName: "角色权限",
      component: "RolesMg",
      icon: "user",
      path: "RolesMg"
  },
  {
      id: "3",
      parentId: "0",
      menuName: "测试",
      component: "Index",
      icon: "user",
      path: "xxx"
  },
  {
      id: "99",
      parentId: "3",
      menuName: "测试",
      component: "About",
      icon: "user",
      path: "xxx"
  },
  {
      id: "40",
      parentId: "0",
      menuName: "测试-1",
      component: "Index",
      icon: "user",
      path: "helloWorld"
  },
  {
      id: "10",
      parentId: "1",
      menuName: "一级1-1",
      component: "About",
      icon: "user",
      path: "about"
  },
  {
      id: "100",
      parentId: "10",
      menuName: "一级1-1-1测试字数边长",
      component: "About",
      icon: "user",
      path: "about"
  },

  {
      id: "11",
      parentId: "1",
      menuName: "一级ListComplete ",
      component: "ListComplete",
      icon: "user",
      path: "one"
  },
  {
      id: "22",
      parentId: "2",
      menuName: "添加路由和组件",
      component: "PermissionMg",
      icon: "user",
      path: "two"
  },
  {
      id: "19  ",
      parentId: "2",
      menuName: "更新日志",
      component: "UpdateLog",
      icon: "user",
      path: "three"
  },
  {
      id: "1922 ",
      parentId: "2",
      menuName: "一些demo",
      component: "ListComplete",
      icon: "user",
      path: "demo"
  },
  {
      id: "23",
      parentId: "1",
      menuName: "一级1-3",
      component: "About",
      icon: "user",
      path: "four"
  },
  {
      id: "24",
      parentId: "1",
      menuName: "一级1-4",
      component: "HelloWorld",
      icon: "user",
      path: "five"
  }]



// 想法   在登陆的 时候把这俩玩意存进去  store
@connect(state => {
    console.log(state.userInfo)
    return {
        menuData: state.userInfo.menuData,
        routerData: state.userInfo.routerData,
        breadcrumbNameMap: state.userInfo.breadcrumbNameMap
    }
})
class CLayout extends Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount() {
        const {dispatch} = this.props
        dispatch({
            type:'LOGIN',
            data: routerObj2
        })
    }
    render() {
        return (
            <div className={ styles.layoutCustomTrigger }>
                <Layout  style={{ minHeight: '100vh' }}>
                    <Sider
                        collapsed={this.state.collapsed}
                        {...this.props}
                        changeCollapsed={this.toggle}
                        />
                    <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className={styles.trigger}
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content {...this.props}/>
                </Layout>
            </Layout>
            </div>   
        );
    }
}
export default CLayout