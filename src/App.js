
import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// import styles from './../AppRouter/appRouter.module.scss'

import Layout from './layouts'
import Login from './pages/User/Login'
// BrowserRouter


// 何时使用Component还是PureComponent？



// 一级路由
// 第一个从定向--第二个给个基本路由
 function AppRouter() {
  return (<Router>
      <Switch>
            <Route path="/" exact render={() => <Redirect to='/test/two' />} />
            <Route path="/login" exact component={ Login } />



            <Route path="/"  component={ Layout } />
      </Switch>
  </Router>)
}



  export default AppRouter

