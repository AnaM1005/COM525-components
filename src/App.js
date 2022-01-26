import React from "react";
import styled from "styled-components";
import './App.css';
import Review from "./Components/Review/index";
import Toggle from "./Components/Toggle";
import Accordion from "./Components/Accordion/index";

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import LogIn from "./Components/LogIn";



const StyledNav = styled.ul`
  margin: 0 auto;
  justify-content: center;
  height: 200px;
  padding: 90px;
  box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.7);
  width: 100px;
  li {
    list-style: none;
    margin-right: 2%;
  }
`;

const StyledHeader = styled.h1`
  text-align: center;
`;

const Home = () => (
  <nav>
    <StyledHeader> Welcome to Interaction Design components!</StyledHeader>
    <StyledNav>
      <li>
        <Link to="/review"> Review</Link>
      </li>

      <li>
        <Link to="/LogIn"> Log In</Link>
      </li>

      <li>
        <Link to="/Accordion"> Accordion</Link>
      </li>

      <li>
        <Link to="/Loader"> Loader</Link>
      </li>

      <li>
        <Link to="/toggle"> Toggle</Link>
      </li>


    </StyledNav>
  </nav>
);

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/review">
          <Review />
        </Route>
        <Route path="/LogIn">
          <LogIn />
        </Route>
        <Route path="/Accordion">
          <Accordion />
        </Route>
        <Route path="/loader">
          <Toggle />
        </Route>
        <Route path="/toggle">
          <Toggle />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;