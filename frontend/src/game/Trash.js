import React       from "react";
import { useDrag } from 'react-dnd'
import trash_1     from "../assets/trash_1.png";
import trash_2     from "../assets/trash_2.png";
import {ItemTypes} from "./Constants";

const Trash = ({TYPE}) => {
  const [{ opacity }, dragRef] = useDrag({
    item: { type: "can" },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0 : 1,
    }),
  })
  
  return (
    <img ref={dragRef} style={{opacity}} src={ItemTypes["can"]} alt="This be trash"/>
  )
}

export default Trash;