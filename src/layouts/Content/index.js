import React, { Component, lazy, Suspense } from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { Layout, Spin } from 'antd'
import DocumentTitle from 'react-document-title';
import BreadcrumbView from './breadcrumb'
const { Content } = Layout;
// import styles from './sider.module.scss'

const Index = () => <p>IndexIndexIndexIndexIndexIndexIndex</p>
const HelloWorld =() =><div>
<h2>1. 怎么重定向子路由的第一个</h2>
<h2>2. 有些路径不是菜单，需要一个标识</h2>
</div>
const About =() => <h2>About  <Link to= "/test/two/">/test/two</Link></h2>
const ListComplete = () => <h2>ListComplete</h2>
const UpdateLog = () => <h2>UpdateLog
    <Link to= "/test/three/one">/test/two/one</Link>
    <Link to= "/test/three/one2">/test/two/one2</Link>
    <Route path="/test/three/one"  component = { Index } />
    <Route path="/test/three/one2"  component = { Exception403 } />
</h2>
const PermissionMg = lazy(() => import("./../../pages/PermissionMg")) 
// lazy(() => import('./OtherComponent'));
const RolesMg = () => <h2>RolesMg  <Link to= "/test/two">/test/two</Link></h2>
const Exception403 = ()=> <div> Exception403<RolesMg/> </div>
const json={
    HelloWorld,
    About,
    ListComplete,
    UpdateLog,
    PermissionMg,
    Index,
    RolesMg,
    Exception403
}



    function PrivateRoute({ component: Component,  ...rest}) {
        return (
            <Route
                {...rest}
                render={_ => <Component />
                }
            />
        )
    }


// 上半部分可以拆出去 
 class CContent extends Component {
    getPageTitle = (pathname, breadcrumbNameMap, isAuthenticated) => {
        const {menuName} = breadcrumbNameMap[pathname] || { }
        if(!menuName) {
            return 'React Admin'
        }
        return `${menuName} - React Admin`;
    }
    render() {
        const { 
            routerData,
            location: { pathname },
            breadcrumbNameMap,
            isAuthenticated
        } = this.props

        // isAuthenticated,
        // location
        // console.log(typeof PermissionMg)
        // console.log( typeof json['RolesMg'])
        // <Route path="/bar" component={Bar} />

        // 报错原因 lazy  返回的是不是func 是个object

        // 会有loading

       return <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
            }}
        >

            {/* 权限 没有权限跳转到指定=>  路由 */}
            {/* children */}
                面包屑组件 依赖props渲染
                <BreadcrumbView {...this.props} />
                <Suspense fallback={<div style={{ paddingTop: 100, textAlign: 'center' }}><Spin size="large" /></div>}>
                    <DocumentTitle title={this.getPageTitle(pathname, breadcrumbNameMap, isAuthenticated)}>
                        <Switch>
                            {
                                routerData.map((item)=>{
                                  return  <PrivateRoute key={item.path}   path={item.path} component={json[item.component]} isAuthenticated = {isAuthenticated}/>
                                })
                            }
                            {/* <Route render={() => <Redirect to="/404" />} /> */}
                        </Switch>
                    </DocumentTitle>    
                </Suspense>
        </Content>
   }
}
export default CContent