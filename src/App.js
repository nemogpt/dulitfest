import './App.css';
import React from "react";
import {Route, Switch } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer"

function App() {
  return (
    
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        {/*<Route path="/blogs" component={Blogs} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
  <Route path="/contact" component={Contact} />*/}
      </Switch>
      <Footer/>
    </React.Fragment>   
  
  );
}

export default App;
