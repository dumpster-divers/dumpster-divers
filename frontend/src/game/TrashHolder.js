import React from 'react';
import {DndProvider} from "react-dnd";

const TrashHolder = ({children, visible}) => {
  return (
    <>
      <div className="trashBlock">
        <div className="trashInnerBlock">
          <div className="trash">
            {visible && children}
          </div>
        </div>
      </div>
    </>
  )
}

export default TrashHolder;


