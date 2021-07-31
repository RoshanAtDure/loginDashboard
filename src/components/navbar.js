import React, { useState, useEffect } from 'react';
import { BrowserRouter, HashRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {loggedIn , loggedOut}  from '../redux/action/index';

const Navbar = () => {
  let history = useHistory();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const dispatch = useDispatch();
  const islogin = useSelector((state)=> state.isLogin)


  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const logout= () => {
    localStorage.removeItem('userloginObj')
    dispatch(loggedOut())
    history.push('/');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to={"/sign-in"}>MyLogo</Link>
        <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            {
              !islogin ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-in"}>Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/register"}>Sign up</Link>
                  </li></>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/dashboard"}>User List</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/userProfile"}>User Profile</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" onClick={()=>logout()}>Logout</Link>
                  </li>
                </>
              )
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
