import React from "react";
import { useDrop } from "react-dnd";
import bin from "../assets/bin_general_green_1.png";
import binClosed from "../assets/bin_general_green_closed.png";
import "./gameStyles.css";

const TrashBin = (props) => {
  const [{ isOver }, drop] = useDrop({
    accept: "droppable",
    drop: (x, y) => props.onDrop(x, y, false),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  let image = isOver ? bin : binClosed;

  return <img ref={drop} src={image} alt="Trash Bin" className="bin-img" />;
};

export default TrashBin;
