import React from "react";
import challenges from "../mocks/challenges";
import { useNavigate } from "react-router-dom"

const TrickListItem = (props) => {
  const navigate = useNavigate();

  const trickListChallenges = challenges.filter(challenge => props.id === challenge.trick_id);
  
  const displayChallenges = trickListChallenges.map((challenge) => {
    const challengeRoute = `/trick/${challenge.trick_id}/challenge/${challenge.id}`
    
    return(
      <li key={challenge.id} className="list-group-item" onClick={() => navigate(challengeRoute)}>
        {challenge.name}
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