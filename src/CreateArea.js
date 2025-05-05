import React,{useState} from "react";

const CreateArea = (props) => {
  const [note, setNote] = useState({ title: "", content: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNote((prevNote) => ({
      ...prevNote,
      [name]: value
    }));
  };

  const submitNote = (event) => {
    event.preventDefault();
    if (!note.title.trim() || !note.content.trim()) {
      alert("Please fill in both title and content!");
      return;
    }
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          value={note.title}
          placeholder="Enter your note title"
          onChange={handleChange}
        />
        <textarea
          name="content"
          value={note.content}
          placeholder="Enter your note"
          rows="3"
          onChange={handleChange}
        />
        <button className="addButton" onClick={submitNote}>
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateArea;