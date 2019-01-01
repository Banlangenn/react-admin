import React, { Component } from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { Layout } from 'antd'
import BreadcrumbView from './breadcrumb'
const { Content } = Layout;
// import styles from './sider.module.scss'


const HelloWorld = () =><div>
    <h2>1. 怎么重定向子路由的第一个</h2>
    <h2>2. 有些路径不是菜单，需要一个标识</h2>
</div>
const About = () => <h2>About  <Link to= "/test/two">/test/two</Link></h2>
const ListComplete = () => <h2>ListComplete</h2>
const UpdateLog = () => <h2>UpdateLog</h2>
const PermissionMg = () => <div>
    <h3>PermissionMg 侧边栏整体 依赖props-路由数据变化  <Link to= "/permission/about/about"> /permission/about/about</Link></h3>
    <h2>1. 怎么重定向子路由的第一个</h2>
    <h2>2. 有些路径不是菜单，需要一个标识不去渲染菜单</h2></div>
const Index = () => <h2>Index</h2>
const RolesMg = () => <h2>RolesMg  <Link to= "/test/two">/test/two</Link></h2>
const json={
    HelloWorld,
    About,
    ListComplete,
    UpdateLog,
    PermissionMg,
    Index,
    RolesMg
}


// 上半部分可以拆出去 
 class CContent extends Component {
    render() {
        const { routerData } = this.props
       return  routerData.length === 0
        ? 
        null 
        :
        <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
            }}
            >
            <BreadcrumbView {...this.props} />
            <Switch>
            <Route key='ffff' exact path="/ww" component= {json['PermissiRolesMgonMg']}/>
                {
                    routerData.map((item)=>{
                        return  <Route key={item.path} exact path={item.path} component= {json[item.component]}/>
                    })
                }
                <Route render={() => <Redirect to="/404" />} />
            </Switch>
        </Content>
   }
}
export default CContent