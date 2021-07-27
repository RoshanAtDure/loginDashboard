import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {loggedIn , loggedOut}  from '../redux/action/index';

function Login() {
  let history = useHistory();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [errorMsg, setMessagw] = React.useState('')
  const [isError, setError] = React.useState(false)
  const mystate = useSelector((state)=> state.isLogin)
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    setError(false)
    var reglocalList = JSON.parse(localStorage.getItem('reglocalList'));
    let checkuserpresnt = reglocalList.filter(obj => obj.Email == data.Email && obj.Password == data.Password)
    if (checkuserpresnt.length > 0) {
      localStorage.setItem('userloginObj', JSON.stringify(checkuserpresnt[0]))
      dispatch(loggedIn())
      history.push('/dashboard');
    } else {
      setError(true)
      setMessagw('Email or password is incorrect!')
    }
  }

  return (
    <div className="auth-wrapper dashboard-container">
      <form className="auth-inner" onSubmit={handleSubmit(onSubmit)}>

        {/* register your input into the hook by invoking the "register" function */}
        <div className="form-group">
          <label>Email address:</label>
          <input className="form-control" placeholder="Enter email"
            {...register("Email", {
              required: true,
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address"
              }
            })} />
          {errors.Email && <span className="text-danger">{errors.Email.message ? errors.Email.message : "Please enter valid email id"}</span>}
        </div>


        {/* include validation with required or other standard HTML validation rules */}
        <div className="form-group">
          <label>Password:</label>
          <input className="form-control" type="password" placeholder="Enter password" {...register("Password", { required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.Password && <span className="text-danger">Password is required</span>}
        </div>

        {isError && <div className="text-danger">{errorMsg}</div>}
        <input type="submit" />
        <p className="forgot-password text-right">Not user?  <Link to={"/register"}>registered</Link></p>
      </form>
    </div>
  )
}

export default Login
