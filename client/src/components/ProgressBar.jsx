import React, {useContext} from "react";
import {LinearProgress} from "@mui/material"
import { authContext } from "../providers/AuthProvider";

const ProgressBar = () => {
  const {
    user
  } = useContext(authContext);

  const getCurrentLevel = () =>{
    return (user.experience - (user.experience % 1000)/ 1000 ) + 1 || 1;
  }

  const getCurrentExp = () => {
    return (user.experience % 1000 / 100) || 0;
  }

  return (
    <div className="bg-secondary d-flex flex-column justify-content-end align-items-center" style={{height: 40, width: "100%"}}>
      <span className="text-light">Lvl {getCurrentLevel()}</span>
        <LinearProgress 
          variant="determinate" 
          value={getCurrentExp()} 
          sx={{
            height: 20,
            width: "100%"
          }}
        />
    </div>
  );
}

export default ProgressBar;