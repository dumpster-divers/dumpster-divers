import React from "react";
import { useDrop } from "react-dnd";
import binOpened from "../assets/bin_recycle_orange_1.png";
import binClosed from "../assets/bin_recycle_orange_closed.png";
import "./gameStyles.css";

const RecycleBin = (props) => {
  const [{ isOver }, drop] = useDrop({
    accept: "droppable",
    drop: (trash, recycleBin) => props.onDrop(trash, recycleBin, true),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  let image = isOver ? binOpened : binClosed;

  return <img ref={drop} src={image} alt="Recycle Bin" className="bin-img" />;
};

export default RecycleBin;
