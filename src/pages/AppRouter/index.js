
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from './../AppRouter/appRouter.module.scss'
import { Button, Slider } from 'antd';


const Index = (props) => {
  const {history, ...rest} = props
  console.log(rest)
  console.log('rest')
  console.log('rest')
  // console.log(new URLSearchParams(rest.location.search))
  return <h2 onClick={()=> {history.push('/users')}}>Home</h2>;
}
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;


// 一级路由
const AppRouter = () => (
    <Router>
      <div>
        <nav>
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
        </nav>
  
        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
  );



  export default AppRouter

