import React from "react";
import Profile from "../Profile";
import TrickList from "../TrickList";
import ProgressBar from "../ProgressBar";

const Home = () => {
  return(
    <div>
      <ProgressBar/>
      <Profile />
      <TrickList />
    </div>
  )
}

export default Home;