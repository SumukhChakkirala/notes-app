import { useState } from "react";
import { useStyles } from "./styling";
import TextField from '@mui/material/TextField';
import { Container,Grid } from "@material-ui/core";
const AddNote = ({handleAddNote}) => {
    const[noteText, setNoteText] = useState('');
    const charaterLimit = 200;
    const classes = useStyles()

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
    return (
        //<Container>
            <div className={classes.noteNew}>
                <TextField
                    id="standard-multiline-static"
                    label="Add Note"
                    multiline
                    rows={4}
                    variant="standard" // or "filled"
                    InputProps={{
                        disableUnderline: true,
                        sx: { backgroundColor: 'aqua' }
                    }}
                />
                <div className={classes.noteFooter}>
                    <small>{200 - noteText.length} remaining</small>
                    <button className={classes.save} onClick={handlesaveClick}>Save</button>
                </div>
            </div>
        //</Container>
    );
};

export default AddNote;