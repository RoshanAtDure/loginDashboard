
import { BrowserRouter, HashRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import './App.css';
import Login from "./components/login";
import SignUp from "./components/signup";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            {/* <Link className="navbar-brand" to={"/sign-in"}>ABC</Link> */}
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
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

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path='/' component={Login} />
                <Route path="/sign-in" component={Login} />
                <Route path="/register" component={SignUp} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
