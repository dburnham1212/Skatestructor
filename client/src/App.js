import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home"
import NavBar from "./components/NavBar";
import ChallengePage from "./components/Pages/ChallengePage";
import Login from "./components/Login";
import Register from "./components/Register";

import './App.css';
import AuthProvider from "./providers/AuthProvider";


function App() {
  return (
    <div>
      <AuthProvider>
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
      </AuthProvider>
    </div>
  );
}

export default App;
