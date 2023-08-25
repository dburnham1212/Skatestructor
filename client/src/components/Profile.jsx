import React, { useContext, useEffect } from "react";
import "../stylesheets/profile.css"
import { authContext } from "../providers/AuthProvider";

const Profile = () => {
  const {
    user
  } = useContext(authContext);

  return (
    <div className="bg-light container-fluid border border-dark rounded-bottom border-top-0 py-3">
      <div className="row m-2">
        <div className="d-flex justify-content-center align-items-center col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 mb-2">
          <img className="profile__profile-image" src="https://images.unsplash.com/photo-1569135579442-d37b7a0ea74e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"/>
        </div>
        <div className="card col-12 col-sm-12 col-md-8 col-lg-9 col-xl-9 p-2 container-fluid">
          <div className="row g-3">
            <div className="col-6">
              <div className="card">
                <div className="card-header text-center">
                  <h6>Username</h6>
                </div>
                <div className="card-body text-center">
                  <h6>{user.user_name}</h6>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card">
                <div className="card-header text-center">
                  <h6>Experience</h6>
                </div>
                <div className="card-body text-center">
                  <h6>{user.experience}</h6>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card">
                <div className="card-header text-center">
                  <h6>Tricks</h6>
                </div>
                <div className="card-body text-center">
                  <h6>0</h6>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card">
                <div className="card-header text-center">
                  <h6>Challenges</h6>
                </div>
                <div className="card-body text-center">
                  <h6>0</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
