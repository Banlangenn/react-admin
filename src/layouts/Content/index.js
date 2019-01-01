import React, { Component } from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { Layout } from 'antd'
import BreadcrumbView from './breadcrumb'
const { Content } = Layout;
// import styles from './sider.module.scss'


const HelloWorld = () => <h2>HelloWorld</h2>
const About = () => <h2>About  <Link to= "/test/two">/test/two</Link></h2>
const ListComplete = () => <h2>ListComplete</h2>
const UpdateLog = () => <h2>UpdateLog</h2>
const PermissionMg = () => <h2>PermissionMg 侧边栏整体 依赖props-路由数据变化  <Link to= "/permission/about/about"> /permission/about/about</Link></h2>
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