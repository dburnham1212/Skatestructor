import React from "react";
import "../stylesheets/profile.css"
import profiles from "../mocks/profiles";

const Profile = () => {
  const currentProfile = profiles[0];

  return (
    <div className="bg-light container-fluid border border-dark rounded-bottom border-top-0 py-3">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img className="profile__profile-image" src="https://images.unsplash.com/photo-1569135579442-d37b7a0ea74e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"/>
          <div>
            <h4>Name: {currentProfile.first_name} {currentProfile.last_name}</h4>
            <h4>Preferred Style: {currentProfile.preferred_style}</h4>
          </div>
        </div>
    </div>
  );
}

export default Profile;
