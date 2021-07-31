import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";

export default function Employee() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [formstate, setformdiv] = useState([1])
  const [errorMsg, setMessagw] = useState('')
  const [isError, setError] = React.useState(false)
  const cloneDiv = useRef('clonediv')

  const onSubmit = (data) => {
    console.log(data)
  }

  const forndiv = () => {
    return formstate.map((userObj, i) => {
      return (
        <div ref={cloneDiv} key={i}>
          <div className="form-group">
            <label>Name:</label>
            <input className="form-control" type="text" placeholder="Name"
              {...register("Firstname"+i, {
                required: true,
                required: 'Name is required',
                pattern: {
                  value: /^[a-zA-Z ]*$/,
                  message: "Please enter valid  name "
                }
              })}
            />
            {console.log(errors)}
            {errors['Firstname'+i] && <span className="text-danger">{errors['Firstname'+i] .message ? errors['Firstname'+i].message : "Please enter first name"}</span>}
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input className="form-control" placeholder="Enter email"
              {...register("Email"+i, {
                required: true,
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter valid email id "
                }
              })} />
            {errors['Email'+i] && <span className="text-danger">{errors['Email'+i].message ? errors['Email'+i].message : "Please enter first name"}</span>}
          </div>

          <div className="form-group">
            <label>Mobile number:</label>
            <input className="form-control" placeholder="Enter phone number"
              {...register("Mobilenumber"+i, {
                required: true,
                required: 'Mobile number is required',
                maxLength: 10,
                pattern: {
                  value: /^(\+\d{1,3}[- ]?)?\d{10}$/,
                  message: "Please enter valid phone number"
                }
              })} />
            {errors['Mobilenumber'+i] && <span className="text-danger">{errors['Mobilenumber'+i].message ? errors['Mobilenumber'+i].message : "Please enter valid phone number"}</span>}
          </div>
        </div>

      )
    })

  }

  const addmore = () => {
    console.log(cloneDiv.current)
    let arr = [...formstate , ...[formstate.length +1]]
    console.log(arr)
    setformdiv(arr)

  }



  return (
    <div className="auth-wrapper dashboard-container">
      <form className="auth-inner" onSubmit={handleSubmit(onSubmit)}>
        {forndiv()}
        {/* <div ref={cloneDiv}>
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
        </div> */}

        {isError && <div className="text-danger">{errorMsg}</div>}
        <button type="button" onClick={() => addmore()}>Add more</button>
        <input type="submit" />
      </form>
    </div>
  );
}