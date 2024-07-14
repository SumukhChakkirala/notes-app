import { MdDeleteForever } from "react-icons/md";
import { Typography,Button, Container, makeStyles } from '@material-ui/core'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useStyles } from './styling';




const Note = ({id, text, date, handleDeleteNote}) =>{
    const classes = useStyles()
    return (
        <Container>
        <div className={classes.note}>
            <span>{text}</span>
            <div className={classes.noteFooter}>
                <small>{date}</small>
                <RemoveCircleIcon 
                    onClick={() => handleDeleteNote(id)} 
                    className={classes.icons}
                    />
            </div>
        </div>
        </Container>
    )
}
export default Note;