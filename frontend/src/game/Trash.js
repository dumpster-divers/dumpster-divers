import React, {useEffect} from "react";
import { useDrag }        from 'react-dnd'
import {ItemTypes} from "./Constants";

const Trash = ({currentTrash}) => {
  console.log(currentTrash["name"]);

  const [{ opacity }, dragRef] = useDrag({
    item: {type: "droppable", recyclable: currentTrash.recyclable},
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0 : 1,
    }),
  })

  return (
    <img ref={dragRef} style={{opacity}} src={ItemTypes[currentTrash.name]} alt="This be trash"/>
  )
}

export default Trash;