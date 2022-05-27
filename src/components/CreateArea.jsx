import React, {useState} from "react";

function CreateArea(props) {

  const [newNote, setNewNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event){
    const {name, value} = event.target;
    
    setNewNote(prevNote => {
      return{
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event){
    props.onAdd(newNote);
    event.preventDefault();
    setNewNote({
      title: "",
      content: ""
    });
  }



  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={newNote.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={newNote.content} />
        <button
        onClick={submitNote}
        >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
