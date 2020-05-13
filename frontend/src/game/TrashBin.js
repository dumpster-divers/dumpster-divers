import React              from "react";
import {useDrop} from 'react-dnd'
import { ItemTypes }      from './Constants'
import bin           from "../assets/bin_general_green_1.png";
import "./bin.css";

const TrashBin = () => {
  const [{isOver}, drop] = useDrop({
    accept: ItemTypes.BAD,
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