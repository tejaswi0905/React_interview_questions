/*eslint-disable*/

import React, { forwardRef } from "react";

const Note = forwardRef(({ note, text, initialPos, handleDragStart }, ref) => {
  return (
    <div
      ref={ref}
      className="note"
      style={{
        left: `${initialPos?.x}px`,
        top: `${initialPos?.y}px`,
      }}
      onMouseDown={(e) => {
        handleDragStart(note, e);
      }}
    >
      📌 {text}
    </div>
  );
});

export default Note;
