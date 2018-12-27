import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import { Layout } from 'antd';
const { Content } = Layout;
// import styles from './sider.module.scss'


const HelloWorld = () => <h2>HelloWorld</h2>
const About = () => <h2>About</h2>
const ListComplete = () => <h2>ListComplete</h2>
const UpdateLog = () => <h2>UpdateLog</h2>
const PermissionMg = () => <h2>PermissionMg</h2>
const Index = () => <h2>Index</h2>
const PermissiRolesMgonMg = () => <h2>RolesMg</h2>

const json={
    HelloWorld,
    About,
    ListComplete,
    UpdateLog,
    PermissionMg,
    Index,
    PermissiRolesMgonMg
}


// 上半部分可以拆出去 

@connect(state => {
    return {
        routerData: state.userInfo.routerData
    }
})
 class CContent extends Component {
    // state = {
    //     permissions:[]
    // }
    render() {
        // console.log('routerDatarouterDatarouterDatarouterData')
        // console.log(this.props.routerData)
       return  this.props.routerData.length === 0
            ? 
            null 
            :
            <Content style={{
                margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
              }}
              >
               {/* <Route path='/messages' component={json['PermissiRolesMgonMg']}/> */}
                <Switch>
                <Route key='ffff' exact path="/ww" component= {json['PermissiRolesMgonMg']}/>
                    {
                        this.props.routerData.map((item)=>{
                            return (
                                <Route key={item.path} exact path={item.path} component= {json[item.component]}/>
                                    )
                                })
                            }
                    
                        <Route render={() => <Redirect to="/404" />} />
                </Switch>
            </Content>
   }
}
export default CContent