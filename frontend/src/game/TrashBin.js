import React              from "react";
import {useDrop} from 'react-dnd'
import bin           from "../assets/bin_general_green_1.png";
import "./bin.css";

const TrashBin = (props) => {
  const [{isOver}, drop] = useDrop({
    accept: "droppable",
    drop: (x, y) => props.onDrop(x, y, false),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    })
  })

  let color = (isOver) ? "green" : "red";

  return (
    <img style={{backgroundColor: color}} ref={drop} src={bin} alt="Trash Bin"/>
  )
}

export default TrashBin;