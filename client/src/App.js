import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home"
import NavBar from "./components/NavBar";
import ChallengePage from "./components/Pages/ChallengePage";
import Register from "./components/Register";
import Login from "./components/Login";
import { authContext } from "./providers/AuthProvider";

import './App.css';


function App() {
  const {
    authenticated
  } = useContext(authContext);

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* Home Page*/}
          <Route path="/" element={ authenticated ? <Home/> : <Login/>}/>
          {/* Challenge Page */}
          <Route path="trick/:trick_id/challenge/:challenge_id" element={authenticated ? <ChallengePage/> : <Login/>}/>
          {/* Login Page */}
          <Route path="login" element={authenticated ? <Home/> : <Login/>}/>
          {/* Register Page */}
          <Route path="register" element={authenticated ? <Home/> : <Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
