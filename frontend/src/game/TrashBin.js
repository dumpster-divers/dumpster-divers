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

  let colo = "red";
  if (isOver) {
    colo = "green";
  }
  console.log(colo);

  return (
    <img style={{backgroundColor: colo}} ref={drop} src={bin} alt="hey"/>
  )
}

export default TrashBin;