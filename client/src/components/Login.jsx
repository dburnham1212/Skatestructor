import React, { useState }from "react";
import Cookies from 'js-cookie'

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = (event) => {
    event.preventDefault();
    if(Cookies.get('username')){
      console.log("cookie found", Cookies.get('username'))
    } else {
      console.log("setting cookie", userName);
      Cookies.set('username', userName, { expires: 7 });
    }
    
  }
 
  return(
    <div className="d-flex justify-content-center py-5">
      <div className="card col-12 col-sm-8 col-md-7 col-lg-6 col-xl-4 text-center">
        <div className="card-header">
          <h2>Login</h2>
        </div>
        <form className="px-3">
          <div className="form-group pt-4">
            <label className="form-label">Username</label>
            <input className="form-control" type="text" onChange={(e) => setUserName(e.target.value)}placeholder="username"></input>
          </div>
          <div className="form-group pt-4">
            <label className="form-label">Password</label>
            <input className="form-control" type="password" placeholder="password"></input>
          </div>
          <div className="d-flex justify-content-end mx-2 my-4">
            <button className="btn btn-dark" onClick={(e) => onLogin(e)}>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;