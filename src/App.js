
import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, HashRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from "./components/navbar";
import Login from "./components/login";
import SignUp from "./components/signup";
import Dashboard from "./components/dashboard";
import UserProfile from "./components/userProfile";

const App = () => {

  const [isloggin, setisloggin] = React.useState(false)

  useEffect(() => {
   let user =  JSON.parse(localStorage.getItem('userloginObj'));
   if(user != null){
    setisloggin(true)
   }
  }, [])

  const getisloggin = useCallback(() =>{
    return isloggin
  }, [isloggin])

  return (
    <BrowserRouter>
        <div className="App">
          <Navbar getisloggin={getisloggin}></Navbar>
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
