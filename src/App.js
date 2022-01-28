import React from "react";
import styled from "styled-components";
import './App.css';
import Review from "./Components/Review/index";
import Slider from "./Components/Slider/index";
import Accordion from "./Components/Accordion/index";
import LogIn from "./Components/LogIn";
import Loader from "./Components/Loader/index";

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"




const StyledNav = styled.ul`
  margin: 0 auto;
  justify-content: center;
  height: 200px;
  padding: 90px;
  box-shadow: 0px 4px 20px 5px rgba(196, 196, 196, 0.6);
  background-color: #fff;
  width: 100px;
  li {
    list-style: none;
    margin-right: 2%;
    margin-top: 18px;
    text-align: center;
    justify-content: center;
    font-size: 20px;
    color: #fff;
  }
  border-radius: 10px;
`;

const StyledHeader = styled.h1`
  text-align: center;
  margin-top: 100px;
  margin-left: 30vw;
`;

const Home = () => (
  <nav>
    <StyledHeader> Welcome to Interaction Design components library!</StyledHeader>
    <StyledNav>
      <li>
        <Link to="/review"> Rating</Link>
      </li>

      <li>
        <Link to="/LogIn"> Log In</Link>
      </li>

      <li>
        <Link to="/Accordion"> Accordion</Link>
      </li>

      <li>
        <Link to="/Slider"> Slider</Link>
      </li>

      <li>
        <Link to="/Loader"> Loader</Link>
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
        <Route path="/Slider">
          <Slider />
        </Route>
        <Route path="/Loader">
          <Loader />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
};

export default App;