import { makeStyles } from "@material-ui/core"
import { DarkMode } from "@mui/icons-material";

export const useStyles = makeStyles({
    container:{
        maxWidth: '960px',
        marginRight: 'auto',
        marginLeft:'auto',
        paddingRight: '15px',
        paddingLeft: '15px',
        minHeight: '100vh',
      },
    header:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    search: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'aqua',
      borderRadius: '10px',
      padding: '5px',
      marginBottom: '1.5rem',
      '& input': {
        border: 'none',
        backgroundColor: 'aqua',
        padding: '5px',
        flex: 1,
        '&:focus': {
          outline: 'none',
        },
      }
    },
    noteList:{
        display: 'grid',
        gridGap: '1rem',
        gridTemplateColumns:'repeat(auto-fit, minmax(250px,1fr))',
    },
    icons:{
        fontSize: '1.8em',
        '&:hover':{
          cursor: 'pointer',
        }
      },
    note:{
      backgroundColor: 'orange',
      borderRadius: '10px',
      padding: '1rem',
      minHeight: '170px' ,
      display:'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      whiteSpace:'pre-wrap',
      '&:hover':{
          backgroundColor: 'yellow',
        }
      },
    noteFooter:{
          display: 'flex',
          alignItems: 'centers',
          justifyContent: 'space-between',
      },
    
    noteNew:{
        backgroundColor: 'aqua',
        borderRadius: '10px',
        padding: '1rem',
        minHeight: '170px' ,
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        whiteSpace:'pre-wrap',
      },
    save:{
        backgroundColor: 'aqua',
        border: 'none',
        borderRadius: '15px',
        padding: '5px 10px 5px 10px',
        '&:hover':{
        backgroundColor:'orange',
        cursor: 'pointer',
        }
    },
    darkMode:{
        backgroundColor: 'black',
        '& h1':{
            color: 'white',
        }
    },
    colorLayout:{
      backgroundColor: 'black'
    },
    h1tag:{
      color: 'black',
    },
    textarea:{
        border: 'none',
        resize: 'none',
        backgroundColor: 'aqua',
        '&:focus':{
            outline: 'none',
        },
      },
  })

