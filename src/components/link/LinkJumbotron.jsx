import React from 'react'
import styles from '../link/LinkJumbotron.module.css'
const LinkJumbotron = ({text}) => {
  return (
    <a className={`${styles.link}`}href="#">{text}</a>
  )
}

export default LinkJumbotron;