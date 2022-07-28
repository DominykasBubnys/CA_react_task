import React from 'react'
import LinkButton from '../Components/LinkButton'
import classes from "./Home.module.css"
import ServiceList from "../Components/Services/servicesList";
import Data from "../Components/Services/Data";

const Home = () => {
  return (
    <div className={classes.main}>
      
      <h1>One Page Bootstrap Website Templte</h1>

      <h2>We are team of talented designers</h2>

      <LinkButton title={"Get started"} />

      <ServiceList data={Data} />

    </div>
  )
}

export default Home