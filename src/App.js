
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import styles from './../AppRouter/appRouter.module.scss'
import { Button } from 'antd';
import About from './pages/About'
import Layout from './layouts'
const Index = (props) => {
  const {history, ...rest} = props
  console.log(new URLSearchParams(rest.location.search))
  return <div>
      <h2 onClick={()=> {history.push('/users')}}>Users </h2><Button>点我没用</Button>
  </div>;
}

// 何时使用Component还是PureComponent？



// 一级路由
const AppRouter = (props) => {
  return (<Router>
    <div>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
        </ul>
      </nav> */}
  
      <Route path="/" component={Layout} />
      <Route path="/about/" component={About} />
      <Route path="/users/" component={Index} />
    </div>
  </Router>)
}

  // class AppRouter extends PureComponent {

  //     render() {
  //       return 
  //     }
  // }



  export default AppRouter

