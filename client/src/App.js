import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home"
import NavBar from "./components/NavBar";
import ProgressBar from "./components/ProgressBar";
import './App.css';
import ChallengePage from "./components/Pages/ChallengePage";


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <ProgressBar />
        <Routes>
          {/* Home Page*/}
          <Route path="/" element={ <Home/>}/>

          {/* Challenge Page */}
          <Route path="trick/:trick_id/challenge/:challenge_id" element={<ChallengePage/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
