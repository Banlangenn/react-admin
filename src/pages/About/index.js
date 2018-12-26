
import React, { Component } from 'react'
import styles from './about.module.scss'
class About extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        console.log(styles)
        return <div className={ styles.layoutCustomTrigger }>
            123
        </div>
    }
}
export default About