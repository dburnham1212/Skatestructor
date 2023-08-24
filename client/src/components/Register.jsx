import React, {useContext} from "react";

import { authContext } from "../providers/AuthProvider";

const Register = () => {
  const {
    userName,
    setUserName,
    email,
    setEmail,
    password,
    setPassword,
    passwordConfirmation,
    setPasswordConfirmation,
    onRegister
  } = useContext(authContext);
 

  return(
    <div className="d-flex justify-content-center py-5">
      <div className="card col-12 col-sm-8 col-md-7 col-lg-6 col-xl-4 text-center">
        <div className="card-header">
          <h2>Register</h2>
        </div>
        <form className="px-3">
          <div className="form-group pt-4">
            <label>Username</label>
            <input className="form-control" type="text" onChange={(e) => setUserName(e.target.value)} placeholder="username"></input>
          </div>
          <div className="form-group pt-4">
            <label>Email</label>
            <input className="form-control" type="email" onChange={(e) => setEmail(e.target.value)} placeholder="example@example.com"></input>
          </div>
          <div className="form-group pt-4">
            <label>Password</label>
            <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password"></input>
          </div>
          <div className="form-group pt-4">
            <label>Password Confirmation</label>
            <input className="form-control" type="password" onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="confirm password"></input>
          </div>
          <div className="d-flex justify-content-end mx-2 my-4">
            <button className="btn btn-dark" onClick={(e) => onRegister(e)}>Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register;