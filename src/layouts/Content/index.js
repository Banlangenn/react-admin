import React, { Component, lazy, Suspense } from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { Layout, Spin } from 'antd'
import DocumentTitle from 'react-document-title';
import BreadcrumbView from './breadcrumb'
const { Content } = Layout;
// import styles from './sider.module.scss'


const HelloWorld =() =><div>
<h2>1. 怎么重定向子路由的第一个</h2>
<h2>2. 有些路径不是菜单，需要一个标识</h2>
</div>
const About =() => <h2>About  <Link to= "/test/two">/test/two</Link></h2>
const ListComplete = () => <h2>ListComplete</h2>
const UpdateLog = () => <h2>UpdateLog</h2>
const PermissionMg = lazy(() => import("./../../pages/PermissionMg")) 
// lazy(() => import('./OtherComponent'));
const Index = () => <h2>Index</h2>
const RolesMg = () => <h2>RolesMg  <Link to= "/test/two">/test/two</Link></h2>
const Exception403 = ()=> <h2> Exception403 </h2>
// const Bar = lazy(() => import('./Bar'));
const json={
    HelloWorld,
    About,
    ListComplete,
    UpdateLog,
    PermissionMg,
    Index,
    RolesMg
}

// function Authorized ({pathname, breadcrumbNameMap,children}) {
//     console.log('breadcrumbNameMap[pathname]breadcrumbNameMap[pathname]')
//     if(breadcrumbNameMap[pathname]) {
//         return '有路由'
//     }
//     // alert('无理由')
//      <Redirect  to={{ pathname:"/" }} />
// }



// 上半部分可以拆出去 
 class CContent extends Component {
    getPageTitle = (pathname, breadcrumbNameMap) => {
        // const currRouterData = this.matchParamsPath(pathname, breadcrumbNameMap);
    
        // if (!currRouterData) {
        //   return 'Ant Design Pro';
        // }
        // const pageName = formatMessage({
        //   id: currRouterData.locale || currRouterData.name,
        //   defaultMessage: currRouterData.name,
        // });
        // alert(breadcrumbNameMap[pathname])
        if(!breadcrumbNameMap[pathname]) {
            this.props.history.push('/403')
        }
        const {menuName} = breadcrumbNameMap[pathname] || { menuName: '403'}
        if(!menuName) {
            return 'React Admin'
        }
        return `${menuName} - React Admin`;
    }

    render() {
        const { 
            routerData,
            location: { pathname },
            breadcrumbNameMap
        } = this.props
        console.log(typeof PermissionMg)
        console.log( typeof json['RolesMg'])
        // <Route path="/bar" component={Bar} />

        // 报错原因 lazy  返回的是不是func 是个object


       return  routerData.length === 0
        ? 
        null 
        :
        <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
            }}
        >

            {/* 权限 没有权限跳转到指定=>  路由 */}
            {/* children */}
                面包屑组件 依赖props渲染
                <BreadcrumbView {...this.props} />
                <Suspense fallback={<div style={{ paddingTop: 100, textAlign: 'center' }}><Spin size="large" /></div>}>
                    <DocumentTitle title={this.getPageTitle(pathname, breadcrumbNameMap)}>
                        <Switch>
                            {/* 主页 */}
                            <Route path='/' key='ffff' exact render={() => <Redirect to='/test/two' />} />
                            {
                                routerData.map((item)=>{
                                    // 解决子路由重定向问题
                                    return  item.hasOwnProperty('redirect') ?
                                    <Route path={item.path}  key={item.path} exact render={() => <Redirect to={item.redirect} />} />
                                    :<Route key={item.path} exact path={item.path}  component={json[item.component]}/> 
                                })
                            }
                            <Route render={() => <Redirect to="/404" />} />
                        </Switch>
                    </DocumentTitle>    
                </Suspense>
        </Content>
   }
}
export default CContent