import React, { Component } from 'react';
import './App.css';
import styles from './index.module.scss';
import { Button, Slider } from 'antd';


class App extends Component {
  render() {
    console.log(styles)
    console.log('=======')
    return (
      <div className="App">
        <header className="App-header">
          <h1 className={styles.bar}>hahahh</h1>
          <div className={styles.bar}>
            <Slider defaultValue={30}  />
          </div>
          <p>
            
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Button type="danger">Danger</Button>
          <Slider defaultValue={30}  />
          <Slider range defaultValue={[20, 50]}  />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
