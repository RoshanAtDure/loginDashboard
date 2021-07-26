import React from "react";
import { useForm } from "react-hook-form";

function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        var reglocalList = JSON.parse(localStorage.getItem('reglocalList'));
        let checkuserpresnt = reglocalList.filter(obj => obj.Email == data.Email && obj.Password == data.Password)
        console.log(checkuserpresnt)
        if (checkuserpresnt.length > 0) {
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <div className="form-group">
                    <label>Email address</label>
                    <input className="form-control" placeholder="Enter email"
                        {...register("Email", {
                            required: true,
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address"
                            }
                        })} />
                    {console.log(errors.Email)}
                    {errors.Email && <span className="text-danger">{errors.Email.message ? errors.Email.message : "Please enter valid email id"}</span>}
                </div>


                {/* include validation with required or other standard HTML validation rules */}
                <div className="form-group">
                    <label>Password</label>
                    <input className="form-control" placeholder="Enter password" {...register("Password", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.Password && <span className="text-danger">This field is required</span>}
                </div>

                <input type="submit" />
                <p className="forgot-password text-right">
                    Not user?   <a href="/register">registered</a>
                </p>
            </form>
        </>
    )
}

export default Login
