import { Menu, Icon, Layout } from 'antd'
import React from 'react';
import styles from './sider.module.scss'
import  { Link } from 'react-router-dom'
import { urlToList } from './../../uils'
//<Menu>
//   <Menu.Item>菜单项</Menu.Item>
//   <SubMenu title="子菜单">
//     <Menu.Item>子菜单项</Menu.Item>
//   </SubMenu>
// </Menu> 
// const urlToList = url => {
//     const urllist = url.split('/').filter(i => i);
//     return urllist.map((_, index) => `/${urllist.slice(0, index + 1).join('/')}`);
// }
// 这个不同于vue  -- 这个 要把路由写全
//  为什么呢====
//  因为他没有 路由配置文件---如果不写全--还要递归遍历生成路由--
//  《主要耗时》：递归  =>  生成树   =>   解析树 =>   路径解析出来
//  路径写全   拉下来就是路由 -------  只需要一棵树去生成sider就行了
//  把树  铺平  =>  也挺烦的
//  能不能把  《主要耗时》   先请求发出去 然后  =>  放在sider渲染的时候给个loading
class CSider extends React.PureComponent {
    state = {
        openKeys:[],
        pathname: ''
    }
    //  演示用
    componentDidMount() {
        fetch('/api/headOffice-manager/mechanism/findAll').then(response => response.json()).then(res => {
            console.log('===================')
            console.log(res.data)
        }).catch(err => {
            console.log('===================')
            console.log(err)
        })
    }
    //  演示用
    isMainMenu = (openKey) => {
      // 判断是不是一级菜单
        const { menuData } = this.props
        return menuData.some(item => {
            return  item.path === openKey
        })
    }
    onOpenChange = (openKeys) => {
      // - 判断是否有 两个以上的 一级路由-- 如果有> 就打开最后一个
      const moreThanOne = openKeys.filter(openKey => this.isMainMenu(openKey)).length > 1
        this.setState({ 
            openKeys: moreThanOne ? [openKeys.pop()] : [...openKeys]
        })
    }
    renderMenu = (menus) => {
        return menus.map(
            item => this.renderSubMenu(item) 
        )
    }
    renderSubMenu =  ({ menuName, icon, path, children}) => {
        return  children && children.length > 0 ? 
        <Menu.SubMenu title={<span><Icon type="appstore" /><span>{menuName}</span></span>} key={path}>
            {this.renderMenu(children)}
        </Menu.SubMenu> 
        :
        <Menu.Item key={path}>
            <Link to={path}>
                <Icon type="user" />
                <span>{menuName}</span>
            </Link>
        </Menu.Item>
    }
    static getDerivedStateFromProps(props, preProps) {
        const { pathname } = preProps
        // console.log(preProps)
        // 这个地方用 pathname  完全是为了好对比
        //  对比 openKeys 是否相等  两个数组对比会非常麻烦
        // 只要 props 或者state 更新  就会触发此函数
        // 适用于  props  想要在组件内操作props的 情况
        
        if (props.location.pathname !== pathname) {
            return {
                pathname: props.location.pathname,
                openKeys: urlToList(props.location.pathname)
            }
        }
        return null;
    }

      
    render() {
        const {collapsed, menuData, location: { pathname }} = this.props
        const {openKeys} = this.state
        const defaultProps = collapsed ? {} : { openKeys }
        // 不能直接 选中一个  因为 路由路由没有在  菜单上 就没法选中了
        // console.log(openKeys)
        let selectedKeys = urlToList(pathname)
        return ( <Layout.Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
          >
            <div className={styles.logo} >
            non
            </div>
            <Menu 
                {...defaultProps}
                theme="dark" 
                mode="inline"
                onOpenChange={this.onOpenChange}
                selectedKeys={selectedKeys}
            >
                {this.renderMenu(menuData)}
            </Menu>
          </Layout.Sider>)
    }
 }
 export default CSider