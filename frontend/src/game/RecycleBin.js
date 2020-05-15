import React              from "react";
import {useDrop} from 'react-dnd'
import bin           from "../assets/bin_recycle_orange_1.png";
import "./bin.css";

const RecycleBin = (props) => {
  const [{isOver}, drop] = useDrop({
    accept: "can",
    drop: (x, y) => props.onDrop(x, y),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  })

  let color = (isOver) ? "green" : "red";

  return (
    <img style={{backgroundColor: color}} ref={drop} src={bin} alt="Recycle Bin"/>
  )
}

export default RecycleBin;