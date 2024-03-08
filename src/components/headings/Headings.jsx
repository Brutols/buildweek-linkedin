import React from 'react'
import styles from "./headings.module.css"



const Headings = ({variant, text,className}) => {
    const variants = {
        h1: "heading-h1",
        p: "heading-p",
        p06: "heading-p-06",
        h2: "heading-h2",
        h3: "heading-h3",
    }

  return (
    <div className={`${styles.customHeading} ${styles[variants[variant]]} ${styles[className]}`}>{text}</div>
  )
}

export default Headings