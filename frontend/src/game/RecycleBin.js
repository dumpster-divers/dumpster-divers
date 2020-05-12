import React              from "react";
import {useDrop} from 'react-dnd'
import { ItemTypes }      from './Constants'
import bin           from "../assets/bin_recycle_orange_1.png";
import "./bin.css";

const RecycleBin = () => {
  const [{isOver}, drop] = useDrop({
    accept: ItemTypes.GOOD,
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  })

  let color = "red";
  if (isOver) {
    color = "green";
  }


  return (
    <img style={{backgroundColor: color}} ref={drop} src={bin} alt="hey"/>
  )
}

export default RecycleBin;