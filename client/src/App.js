import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home"
import NavBar from "./components/NavBar";
import ChallengePage from "./components/Pages/ChallengePage";
import Login from "./components/Login";
import Register from "./components/Register";

import './App.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* Home Page*/}
          <Route path="/" element={ <Home/>}/>
          {/* Challenge Page */}
          <Route path="trick/:trick_id/challenge/:challenge_id" element={<ChallengePage/>}/>
          {/* Login Page */}
          <Route path="login" element={<Login/>}/>
          {/* Register Page */}
          <Route path="register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
