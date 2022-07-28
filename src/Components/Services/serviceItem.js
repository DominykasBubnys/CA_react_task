import React from 'react'

const ServiceItem = ({title, body}) => {
  return (
    <ul>
      <li>
        {title}
      </li>

      <li>
        {body}
      </li>
    </ul>
  )
}

export default ServiceItem