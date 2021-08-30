import React, { useState } from "react";
import AddBoxIcon from "@material-ui/icons/AddBox";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNotes) => {
      return {
        ...prevNotes,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div className="inputPart">
      <form className="create-form">
        <input
          onChange={handleChange}
          value={note.title}
          name="title"
          type="text"
          placeholder="Title"
        />

        <br />

        <textarea
          onChange={handleChange}
          type="text"
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />

        <br />

        <button className="addIcon" onClick={submitNote}>
          <AddBoxIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
