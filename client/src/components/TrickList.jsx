import React, { useState, useEffect } from "react";
import tricks from "../mocks/tricks"
import TrickListItem from "./TickListItem";
import axios from 'axios'

const TrickList = () => {
  const [tricks, setTricks] = useState([]);

  useEffect(() => {
    axios
    .get(`http://localhost:8080/tricks`)
    .then((res) => {
      if (res.status === 200) {
        setTricks(res.data.tricks);
      }
    })
    .catch((e) => {
      alert(e);
    });
  }, [])


  const trickItems = tricks.map((trick) => {return <TrickListItem
    key={trick.id}
    id={trick.id}
    name={trick.trick_name}
    difficulty={trick.difficulty}
  />})

  return (
    <div className="container-fluid">
      <div className="row">
        {trickItems}
      </div>
    </div>
  )
}

export default TrickList