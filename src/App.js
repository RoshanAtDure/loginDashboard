
import React, { useState } from 'react';
import { BrowserRouter, HashRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import './App.css';
import Container from 'react-bootstrap/Container';
import Login from "./components/login";
import SignUp from "./components/signup";
import Dashboard from "./components/dashboard";
import UserProfile from "./components/userProfile";

const App = () => {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <BrowserRouter>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={"/sign-in"}>MyLogo</Link>
              <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-in"}>Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/register"}>Sign up</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <Container>
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/register" component={SignUp} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/userProfile" component={UserProfile} />
            </Switch>
          </Container>
        </div>
    </BrowserRouter>

  );
}

export default App;
