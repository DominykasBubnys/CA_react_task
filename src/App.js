
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


import Home from "./Pages/Home";

const App = () => {

  const routes = <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="*" element={<Home />}></Route>
  </Routes>


  return (
    <Router>
      <main>{routes}</main>
      <h1 style={ {color:"red"}}>Hello</h1>
    </Router>
  );
}

export default App;
