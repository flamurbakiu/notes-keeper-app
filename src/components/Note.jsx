import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(notes) {
  function handleClick() {
    notes.onDelete(notes.id);
  }

  return (
    <div className="note">
      <h1> {notes.title} </h1>
      <p> {notes.content} </p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
