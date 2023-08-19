import React from "react";
import tricks from "../mocks/tricks"
import TrickListItem from "./TickListItem";

const TrickList = () => {
  const trickItems = tricks.map((trick) => {return <TrickListItem
    key={trick.id}
    id={trick.id}
    name={trick.name}
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