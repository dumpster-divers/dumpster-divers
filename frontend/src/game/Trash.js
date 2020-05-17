import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./Constants";
import { isMobile } from "../utilities/display";

const Trash = ({ currentTrash }) => {
  const pickedUpOpacity = isMobile() ? 0.5 : 0;

  const [{ opacity }, dragRef] = useDrag({
    item: { type: "droppable", recyclable: currentTrash.recyclable },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? pickedUpOpacity : 1,
    }),
  });

  return (
    <img
      ref={dragRef}
      style={{ opacity, cursor: "pointer" }}
      src={ItemTypes[currentTrash.name]}
      alt={"Trash type: " + currentTrash.name}
    />
  );
};

export default Trash;
