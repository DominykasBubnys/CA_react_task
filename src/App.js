
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import MainNavigation from "./Components/Navigation/mainNavigation";
import Home from "./Pages/Home";

const App = () => {

  const routes = <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="*" element={<Home />}></Route>
  </Routes>


  return (
    <Router>
      <main>{routes}</main>
      <MainNavigation />
      <h1 style={ {color:"red"}}>Hello</h1>
    </Router>
  );
}

export default App;
