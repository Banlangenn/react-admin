
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Layout, Icon } from 'antd';
import { connect } from 'react-redux'
import Sider  from './Sider'
import Content  from './Content'
import styles from './layout.module.scss'
const { Header } = Layout;

// 想法   在登陆的 时候把这俩玩意存进去  store
@connect(state => {
    return {
        isAuthenticated: state.userInfo.isAuthenticated,
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
    render() {
        const { isAuthenticated, location } = this.props
        if (!isAuthenticated) return <Redirect to={{  pathname: "/login", state: { from: location } }}/>
        
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