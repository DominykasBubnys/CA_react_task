
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import MainNavigation from "./Components/Navigation/mainNavigation";
import Home from "./Pages/Home";
import CustomPage from "./Pages/CustomPage";

const App = () => {

  const routes = <Routes>
    <Route path="/services" element={<CustomPage />}></Route>
    <Route path="/" element={<Home />}></Route>
    <Route path="*" element={<CustomPage />}></Route>
  </Routes>


  return (
    <Router>
      <main>{routes}</main>
      <MainNavigation />
    </Router>
  );
}

export default App;
