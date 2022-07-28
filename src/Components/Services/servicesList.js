import React from 'react'
import ServiceItem from './serviceItem';
import classes from "./serviceList.module.css"

const ServicesList = ({data}) => {

  const listItems = data.map(item => <ServiceItem key={item.id} title={item.title} body={item.body} />)

  return (

    <div className={classes.list}>
      {listItems}
    </div>
  )
}

export default ServicesList