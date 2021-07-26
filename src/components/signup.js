import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function SignUp() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [errorMsg, setMessagw] = React.useState('')
  const [isError, setError] = React.useState(false)

  const onSubmit = (data) => {
    setError(false)
    var reglocalList = JSON.parse(localStorage.getItem('reglocalList'));
    if (reglocalList == null) {
      localStorage.setItem('reglocalList', JSON.stringify([data]))
      reset()
    } else {
      let checkuserpresnt = reglocalList.filter(obj => obj.Email == data.Email)
      if (checkuserpresnt.length > 0) {
        setMessagw('user already present!')
        setError(true)
      } else {
        setError(true)
        setMessagw('User added successfully!')
        reglocalList.push(data)
        localStorage.setItem('reglocalList', JSON.stringify(reglocalList))
        reset()
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label>Name:</label>
        <input className="form-control" type="text" placeholder="Name"
          {...register("Firstname", {
            required: true,
            required: 'Name is required',
            pattern: {
              value: /^[a-zA-Z ]*$/,
              message: "Please enter valid  name "
            }
          })}
        />
        {errors.Firstname && <span className="text-danger">{errors.Firstname.message ? errors.Firstname.message : "Please enter first name"}</span>}
      </div>

      <div className="form-group">
        <label>Email:</label>
        <input className="form-control" placeholder="Enter email"
          {...register("Email", {
            required: true,
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter valid email id "
            }
          })} />
        {errors.Email && <span className="text-danger">{errors.Email.message ? errors.Email.message : "Please enter first name"}</span>}
      </div>

      <div className="form-group">
        <label>Mobile number:</label>
        <input className="form-control" placeholder="Enter phone number"
          {...register("Mobilenumber", {
            required: true,
            required: 'Mobile number is required',
            maxLength: 10,
            pattern: {
              value: /^(\+\d{1,3}[- ]?)?\d{10}$/,
              message: "Please enter valid phone number"
            }
          })} />
        {errors.Mobilenumber && <span className="text-danger">{errors.Mobilenumber.message ? errors.Mobilenumber.message : "Please enter valid phone number"}</span>}
      </div>

      <div className="form-group">
        <label>Gender:</label>
        <div class="form-check">
          <input {...register("Gender", { required: true })} type="radio" id="exampleRadios1" value="male" />
          <label class="form-check-label" for="exampleRadios1"> Male</label>
        </div>
        <div class="form-check">
          <input {...register("Gender", { required: true })} type="radio" id="exampleRadios2" value="Female" />
          <label class="form-check-label" for="exampleRadios2"> Female</label>
        </div>
        {errors.Gender && <span className="text-danger">{errors.Gender.message ? errors.Gender.message : "Please select gender"}</span>}
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input className="form-control" type="password" placeholder="Password"
          {...register("Password", {
            required: true,
            required: 'Password is required',
          })}
        />
        {errors.Password && <span className="text-danger">{errors.Password.message ? errors.Password.message : "Please enter password"}</span>}
      </div>

      {isError && <div className="text-danger">{errorMsg}</div>}
      <input type="submit" />
      <p className="forgot-password text-right">
        Already registered <a href="/">sign in?</a>
      </p>
    </form>
  );
}