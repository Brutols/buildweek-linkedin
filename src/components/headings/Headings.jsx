import React from 'react'
import styles from "./headings.module.css"



const Headings = ({variant, text}) => {
    const variants = {
        h1: "heading-h1",
        p: "heading-p",
        p06: "heading-p-06",
        h2: "heading-h2",
    }

  return (
    <div className={`${styles.customHeading} ${styles[variants[variant]]}`}>{text}</div>
  )
}

export default Headings