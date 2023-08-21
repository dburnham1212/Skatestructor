import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import challenges from "../../mocks/challenges";
import tricks from "../../mocks/tricks";
import axios from "axios";

const ChallengePage = () => {
  const { trick_id, challenge_id } = useParams();

  const [trickInstructions, setTrickInstructions] = useState([])

  useEffect(() => {
    axios
    .get(`/trickInstruction/trick/${trick_id}`)
    .then((res) => {
      if (res.status === 200) {
        setTrickInstructions(res.data.trickInstructions);
      }
    })
    .catch((e) => {
      alert(e);
    });
  }, [])

  const trick = tricks.filter(trick => Number(trick_id) === trick.id)[0];
  const challenge =  challenges.filter(challenge => Number(challenge_id) === challenge.id)[0];

  const trickInstructionDisplay = trickInstructions.map((instruction, index) => {
    return(
      <li className="list-group-item" key={instruction.id}>
        <h5> {index + 1}: {instruction.title}</h5>
        <h6> {instruction.instruction} </h6>
      </li>
    );
  })

  return (
    <div>
      <div className="card m-3 p-3">
        <h1>Challenge: {challenge.name}</h1>
        <h2>Trick Type: {trick.name}</h2>
        <p>Description: {challenge.description}</p>
      </div>
      <div className="card mx-3 ">
        <h1 className="btn btn-light" 
          data-bs-toggle="collapse" 
          data-bs-target="#collapseOne" 
          aria-expanded="true" 
          aria-controls="collapseOne"
        > Trick Instructions (Click to expand)</h1>
        <ul id="collapseOne" className="list-group collapse my-3 mx-3">
          {trickInstructionDisplay}
        </ul>
      </div>
    </div>
  )
}

export default ChallengePage;