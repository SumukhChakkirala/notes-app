import Note from "./Note";
import AddNote from "./AddNote";
import { makeStyles } from "@material-ui/core";
import { useStyles } from "./styling";

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
    const classes = useStyles()
    return(
        <div className={classes.noteList}>
            <AddNote handleAddNote={handleAddNote}/>
            {notes.map((note)=> (<Note id={note.id} 
            text = {note.text} 
            date = {note.date}
            handleDeleteNote={handleDeleteNote}/>
            ))}
        </div>
    )
}
export default NotesList;