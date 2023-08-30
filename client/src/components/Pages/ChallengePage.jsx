import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import ProgressBar from "../ProgressBar";
import { authContext } from "../../providers/AuthProvider";

const ChallengePage = () => {

  const {
    user
  } = useContext(authContext);

  const { trick_id, challenge_id } = useParams();

  const [trickInstructions, setTrickInstructions] = useState([])
  const [trick, setTrick] = useState({});
  const [challenge, setChallenge] = useState({});
  const [challengeRecord, setChallengeRecord] = useState(null);

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

    //GET THE CHALLENGE RECORD IF THERE IS ONE
    axios.get(`/challengeRecords/user/${user.id}/challenge/${challenge_id}`)
    .then((res) => {
      console.log(res.data)
      setChallengeRecord(res.data.challengeRecord)
    })
    .catch((e) => {
      alert(e);
    });
  }, [])

  const saveChallengeRecord = () => {
    if (!challengeRecord) {
      // CREATE A RECORD 
      axios.post(`/challengeRecords/user/${user.id}/challenge/${challenge_id}`)
      .then((res) => {
        console.log(res.data)
        setChallengeRecord(res.data.challengeRecord)
      })
      .catch((e) => {
        alert(e);
      });


    }
  }

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
      <ProgressBar/>
      <div className="card m-3">
        <div className="card-header text-center">
          <h4>Trick: {trick.trick_name}</h4>
        </div>
        <div className="card-body">
          <h4>Challenge: {challenge.title}</h4>
          <p>{challenge.description}</p>
        </div>
        <div className="card-footer">
          <div className="d-flex align-items-center justify-content-between">
            <h6>Exp: {challenge.exp_val}</h6>
            
            <div className="d-flex align-items-center gap-2">
              <h6>Mark Completed: </h6>
              <button className="btn btn-light">
                <FontAwesomeIcon className="text-success" icon={faCheck} onClick={() => saveChallengeRecord()}/>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card mx-3 ">
        <button className="btn btn-light" 
          data-bs-toggle="collapse" 
          data-bs-target="#collapseOne" 
          aria-expanded="true" 
          aria-controls="collapseOne"
        > Trick Instructions (Tap to expand)</button>
        <ul id="collapseOne" className="list-group collapse my-3 mx-3">
          {trickInstructionDisplay}
        </ul>
      </div>
    </div>
  )
}

export default ChallengePage;