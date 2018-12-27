import { Menu, Icon, Layout } from 'antd';
import React from 'react';
import { connect } from 'react-redux'
import styles from './sider.module.scss'
//<Menu>
//   <Menu.Item>菜单项</Menu.Item>
//   <SubMenu title="子菜单">
//     <Menu.Item>子菜单项</Menu.Item>
//   </SubMenu>
// </Menu> 

// 这个不同于vue  -- 这个 要把路由写全
//  为什么呢====
//  因为他没有 路由配置文件---如果不写全--还要递归遍历生成路由--
//  《主要耗时》：递归  =>  生成树   =>   解析树 =>   路径解析出来
//  路径写全   拉下来就是路由 -------  只需要一棵树去生成sider就行了
//  把树  铺平  =>  也挺烦的
//  能不能把  《主要耗时》   先请求发出去 然后  =>  放在sider渲染的时候给个loading
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
  return {
    menuData: state.userInfo.menuData
  }
})
class CSider extends React.Component {
    state = {
        openKeys: [],// 初始展开的 SubMenu 菜单项 key 数组
        selectedKey: '', // 初始展开的 SubMenu 选中的 key
    }
    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        console.log(this.props.menuData)
        if (this.props.menuData.map(item=>item.path).indexOf(latestOpenKey) === -1) {
          this.setState({ openKeys });
        } else {
          this.setState({
            openKeys: latestOpenKey ? [latestOpenKey] : [],
          });
        }
    }
    menuClick = (props) => {
        this.props.history.push(props.key); //会刷新 导致 目录记不住
        // console.log(props)
        // console.log('路由路劲为' + props.key)
        this.setState({
            selectedKey: props.key
        });
    };
    renderMenu = (menus) => {
        return menus.map(
            item => this.renderSubMenu(item) 
        )
    }
    renderSubMenu =  ({ menuName, icon, path, children, ...props }) => {
        return  children && children.length > 0 ? 
        <Menu.SubMenu title={<span><Icon type="appstore" /><span>{menuName}</span></span>} key={path}>
            {this.renderMenu(children)}
        </Menu.SubMenu> 
        :
        <Menu.Item key={path}>
            <Icon type="user" />
            <span>{menuName}</span>
        </Menu.Item>
     }
    setMenuOpen = props => {
        const { pathname } = props.location;
        // console.log(openKey: pathname.substr(0, pathname.lastIndexOf('/')),
        // selectedKey: pathname)
        // 这个需要判断一些多级路由 TODO:
        this.setState({
            openKeys: [pathname.substr(0, pathname.lastIndexOf('/'))],
            selectedKey: pathname
        });
    };
    componentDidMount() {
        const {dispatch} = this.props
        dispatch({
          type:'LOGIN',
          data: routerObj2
        })
        this.setMenuOpen(this.props);
    }
    render() {
        // console.log('=初始化props变化了=我走了两边====menuDatamenuData=')
        // console.log(this.props.menuData)
        const {collapsed, menuData} = this.props
        return <Layout.Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
          >
            <div className={styles.logo} >
            non
            </div>
            <Menu 
                theme="dark" 
                mode="inline"
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}
                // defaultOpenKeys
                selectedKeys={[this.state.selectedKey]}
                onClick={this.menuClick}
            >
                {this.renderMenu(menuData)}
            </Menu>
          </Layout.Sider>
    }
 }
 export default CSider