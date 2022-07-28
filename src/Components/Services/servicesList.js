import React from 'react'
import ServiceItem from './serviceItem';
const ServicesList = ({data}) => {

  const listItems = data.map(item => <ServiceItem key={item.id} title={item.title} body={item.body} />)

  return (

    <div>
      {listItems}
    </div>
  )
}

export default ServicesList