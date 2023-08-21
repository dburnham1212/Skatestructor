import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

const ChallengePage = () => {
  const { trick_id, challenge_id } = useParams();

  const [trickInstructions, setTrickInstructions] = useState([])
  const [trick, setTrick] = useState({});
  const [challenge, setChallenge] = useState({});

  useEffect(() => {
    // GET THE CURRENT TRICK
    axios
    .get(`/tricks/${trick_id}`)
    .then((res) => {
      if (res.status === 200) {
        setTrick(res.data.trick);
      }
    })
    .catch((e) => {
      alert(e);
    });

    //GET THE CHALLENGE INFO
    axios
    .get(`/challenge/${challenge_id}`)
    .then((res) => {
      if (res.status === 200) {
        setChallenge(res.data.challenge);
      }
    })
    .catch((e) => {
      alert(e);
    });

    //GET THE INSTRUCTIONS FOR THE TRICK
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
      <div className="card m-3">
        <div className="card-header text-center">
          <h1>Challenge: {challenge.title}</h1>
        </div>
        <div className="card-body">
          <h2>Trick: {trick.trick_name}</h2>
          <p>Description: {challenge.description}</p>
          <div className="d-flex align-items-center justify-content-between">
            <h6>Exp: {challenge.exp_val}</h6>
            <div className="d-flex align-items-center gap-2">
              <h6>Mark Completed: </h6>
              <button className="btn btn-light">
                <FontAwesomeIcon className="text-success" icon={faCheck} />
              </button>
            </div>
            
          </div>
        </div>
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