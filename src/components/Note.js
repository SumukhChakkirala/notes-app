import { MdDeleteForever } from "react-icons/md";
import { Typography,Button, Container, makeStyles } from '@material-ui/core'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useStyles } from './styling';
import CircleIcon from '@mui/icons-material/Circle';
import PaletteIcon from '@mui/icons-material/Palette';




const Note = ({id, text, date, handleDeleteNote}) =>{
    const classes = useStyles()
    return (
        <div className={classes.note}>
            <span>{text}</span>
            <div className={classes.noteFooter}>
                <small>{date}</small>
                <PaletteIcon />
                <RemoveCircleIcon 
                    onClick={() => handleDeleteNote(id)} 
                    className={classes.icons}
                    />
            </div>
        </div>
    )
}
export default Note;