import React, { useContext, useState }from "react";
import { authContext } from "../providers/AuthProvider";

const Login = () => {
  const {
    setUserName,
    setPassword,
    authenticationError,
    onLogin
  } = useContext(authContext);
 
  return(
    <div className="d-flex justify-content-center py-5">
      <div className="card col-12 col-sm-8 col-md-7 col-lg-6 col-xl-4 text-center">
        <div className="card-header">
          <h2>Login</h2>
        </div>
        <form className="px-3">
          <div className="form-group pt-4">
            <label className="form-label">Username</label>
            <input className="form-control" type="text" onChange={(e) => setUserName(e.target.value)} placeholder="username"></input>
          </div>
          <div className="form-group pt-4">
            <label className="form-label">Password</label>
            <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password"></input>
          </div>
          {authenticationError && 
            <h6 className="text-danger my-2">Authentication Error: Invalid Credentials</h6>
            
          }
          <div className="d-flex justify-content-end mx-2 my-4">
            <button className="btn btn-dark" onClick={(e) => onLogin(e)}>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;