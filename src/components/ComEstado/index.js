import React, { Component } from 'react'
import styles from './style.module.css'
import {FaBeer} from 'react-icons/fa'

export class HelloComEstado extends Component {
  render() {
    return (
      <>
        <div className={styles.container}>
          <h3 className={styles.juninho}>Olá COM ESTADO, {this.props.name}</h3>      
          <FaBeer className={styles.juninho} color="red" fontSize='2rem'/>
        </div>
        <div className={styles.divisor}></div>
      </>
    )
  }
}

