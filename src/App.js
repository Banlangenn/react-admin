
import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// import styles from './../AppRouter/appRouter.module.scss'

import About from './pages/About'
import Layout from './layouts'
import Login from './pages/User/Login'
// BrowserRouter

// 登录
// const Login = (props) => {
//   const {history, ...rest} = props
//   console.log(new URLSearchParams(rest.location.search))
//   return <div>
//       <h2 onClick={()=> {history.push('/users')}}>Users </h2><Button>点我没用</Button>
//   </div>;
// }

// 何时使用Component还是PureComponent？



// 一级路由
const AppRouter = (props) => {
  return (<Router>
      <Switch>
            <Route path="/login" exact component={Login} />
          <Route path="/"  component={Layout} />
         
      </Switch>
  </Router>)
}



  export default AppRouter

