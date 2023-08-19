import React from "react";
import {LinearProgress} from "@mui/material"

const ProgressBar = () => {
  return (
    <div className="bg-secondary d-flex flex-column justify-content-end align-items-center" style={{height: 40, width: "100%"}}>
      <span className="text-light">Lvl 1</span>
        <LinearProgress 
          variant="determinate" 
          value={25} 
          sx={{
            height: 20,
            width: "100%"
          }}
        />
    </div>
  );
}

export default ProgressBar;