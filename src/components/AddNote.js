import { useState } from "react";

const AddNote = ({handleAddNote}) => {
    const[noteText, setNoteText] = useState('');
    const charaterLimit = 200;

    const handleChange= (event) =>{
        if (charaterLimit-event.target.value.length>=0){
            setNoteText(event.target.value);
        }
    };
    const handlesaveClick = () =>{
        if(noteText.trim().length>0){
            handleAddNote(noteText);
            setNoteText('')
            
        }
    }
    return (<div className="note new">
        <textarea 
        rows="8" 
        cols = "10" 
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
        ></textarea>
        <div className="note-footer">
            <small>{200- noteText.length} remaining</small>
            <button className="save" onClick={handlesaveClick}>Save</button>
        </div>
    </div>
    );
};

export default AddNote;