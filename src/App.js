
import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, HashRouter, Route, Switch, Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from "./components/navbar";
import Login from "./components/login";
import SignUp from "./components/signup";
import Dashboard from "./components/dashboard";
import UserProfile from "./components/userProfile";
import Employee from "./components/employee";

const App = () => {
  const islogin = useSelector((state) => state.isLogin)

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Container>
          {!islogin ? (
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/register" component={SignUp} />
              <Redirect to="/" />
            </Switch>
          ) : (
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/userProfile" component={UserProfile} />
              <Route path="/employee" component={Employee} />
              <Redirect to="/" />
            </Switch>
          )}
        </Container>
      </div>
    </BrowserRouter>

  );
}

export default App;
