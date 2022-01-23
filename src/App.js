import React from "react";
import './App.css';
import Review from "./Components/Review";
import Toggle from "./Components/Toggle";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



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
    <StyledHeader> Welcome to Interaction Design!</StyledHeader>
    <StyledNav>
      <li>
        <Link to="/review"> Review</Link>
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