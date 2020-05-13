import React from "react";
import { useDrag } from 'react-dnd'
import trash_1           from "../assets/trash_1.png";
import trash_2           from "../assets/trash_2.png";

const Trash = ({isGood}) => {
  const text = isGood ? "good" : "bad";
  const src = isGood ? trash_1 : trash_2;
  
  const [{ opacity }, dragRef] = useDrag({
    item: { type: text },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0 : 1,
    }),
  })

  return (
    <img ref={dragRef} style={{opacity}} src={src} alt="This be trash"/>
  )
}

export default Trash;