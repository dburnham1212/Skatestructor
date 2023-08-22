import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import "../stylesheets/trickList.css"
import axios from "axios";

const TrickListItem = (props) => {
  const navigate = useNavigate();

  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    // GET THE CHALLENGES FOR THE TRICK
    axios
    .get(`/challenge/trick/${props.id}`)
    .then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        setChallenges(res.data.challenges);
      }
    })
    .catch((e) => {
      alert(e);
    });
  }, [])
  
  const displayChallenges = challenges.map((challenge) => {
    const challengeRoute = `/trick/${challenge.trick_id}/challenge/${challenge.id}`
    
    return(
      <li key={challenge.id} className="list-group-item challenge-list-item" onClick={() => navigate(challengeRoute)}>
        {challenge.title}
      </li>
    )
  })

  return (
    <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 mt-4">
      <div className="card bg-light">
        <div className="m-3">
          <h1>{props.name}</h1>
          <h4>Difficulty: {props.difficulty} </h4>
          <ul className="list-group">
            {displayChallenges}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TrickListItem