import React, { useState, useEffect } from "react";
import "../stylesheets/profile.css"
import axios from "axios";


const Profile = () => {
  const [user, setUser] = useState({});
  
  useEffect(() => {
    axios
    .get(`http://localhost:8080/users/${1}`)
    .then((res) => {
      if (res.status === 200) {
        setUser(res.data.user);
      }
    })
    .catch((e) => {
      alert(e);
    });
  }, [])

  return (
    <div className="bg-light container-fluid border border-dark rounded-bottom border-top-0 py-3">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img className="profile__profile-image" src="https://images.unsplash.com/photo-1569135579442-d37b7a0ea74e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"/>
          <div>
            <h4>Username: {user.user_name}</h4>
          </div>
        </div>
    </div>
  );
}

export default Profile;
