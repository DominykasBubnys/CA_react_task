import React from 'react'
import classes from "./serviceItem.module.css";


const ServiceItem = ({title, body}) => {
  return (
    <ul className={classes.item}>

      <img className={classes.logo} src='service.jpg' alt='none' />

      <li className={classes.title}>
        {title}
      </li>

      <li className={classes.body}>
        {body}
      </li>
    </ul>
  )
}

export default ServiceItem