import React from "react";
import { useDrag } from 'react-dnd'
import { ItemTypes } from './Constants'

/**
 * Your Component
 */
const Trash = ({isGood}) => {

  const text = isGood ? "good" : "bad";

  const [{ opacity }, dragRef] = useDrag({
    item: { type: text },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  })


  return (
    <div ref={dragRef} style={{ opacity }}>
      {text}
    </div>
  )
}

export default Trash;