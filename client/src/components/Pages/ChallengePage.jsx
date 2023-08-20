import React from "react";
import { useParams } from "react-router-dom"
import challenges from "../../mocks/challenges";
import tricks from "../../mocks/tricks";

const ChallengePage = () => {
  const { trick_id, challenge_id } = useParams();

  const trick = tricks.filter(trick => Number(trick_id) === trick.id)[0];
  const challenge =  challenges.filter(challenge => Number(challenge_id) === challenge.id)[0];

  return (
    <div>
      <h1>Challenge: {challenge.name}</h1>
      <h2>Trick Type: {trick.name}</h2>
      <p>Description: {challenge.description}</p>
    </div>
  )
}

export default ChallengePage;