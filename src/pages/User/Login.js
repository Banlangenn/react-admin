import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
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
        //  一级菜单
      id: "201",
      parentId: "0",
      menuName: "Exception403",
      component: "Exception403",
      icon: "user",
      path: "403",
      hideMenu: 1
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
@connect()
class Login extends PureComponent {
    state = { redirectToReferrer: false }
    loginFn = () => {
        const { dispatch } = this.props
        dispatch({
            type:'LOGIN',
            data: routerObj2
        })
        this.setState({redirectToReferrer: true})
    }
    render() {
        let { from } = this.props.location.state || { from: { pathname: "/" } };
        let { redirectToReferrer } = this.state;
        if (redirectToReferrer) return <Redirect to={from} />;
        return (
            <div>
                <p>You must log in to view the page at {from.pathname}</p>
                <button onClick={this.loginFn}>Log in</button>
            </div>
          )
    }
}
export default Login
