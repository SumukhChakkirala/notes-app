import Note from "./Note";
import AddNote from "./AddNote";
import { makeStyles } from "@material-ui/core";
import { useStyles } from "./styling";
import { Box, Card } from "@mui/material";

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
    const classes = useStyles()
    return(
        <Box className={classes.noteList} >
            <AddNote handleAddNote={handleAddNote}/>
            {notes.map((note)=> (<Note id={note.id} 
            text = {note.text} 
            date = {note.date}
            handleDeleteNote={handleDeleteNote}/>
            ))}
        </Box>
    )
}
export default NotesList;