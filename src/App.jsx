import React, { Component } from "react";
import { Box, } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import DJ from "./components/DJ";
import Show from "./components/Show";
import Event from "./components/EventPage";
import About from "./components/About";
import Contact from "./components/Contact";





class App extends Component {
  state = {
  };





  render() {
    return (
      <Router>
        <Box padding="0 5em">
          <Header/>
        </Box>
        <Box padding="0 5em">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/dj">
              <DJ />
            </Route>
            <Route path="/show">
              <Show />
            </Route>
            <Route path="/event">
              <Event />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Box>
        <Box>
          <Footer />
        </Box>
      </Router>
    );
  }
}

export default App;
