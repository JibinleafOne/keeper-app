import React from "react";
import "./styles.css";

const Note = (props) => {
  const handleClick = () => {
    props.onDelete(props.id);
  };

  return (

    <div className="note">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
};

export default Note;
