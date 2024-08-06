import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ColorPicker from "./components/ColorPicker.js";
import Avatar from "@material-ui/core/Avatar";
import deepOrange from "@material-ui/core/colors/deepOrange";
import deepPurple from "@material-ui/core/colors/deepPurple";
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";
import blue from "@material-ui/core/colors/blue";
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';
import { useStyles } from './components/styling';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Fingerprint from '@mui/icons-material/Fingerprint';
import { ButtonGroup, Button, Container, Grid, CssBaseline } from '@material-ui/core';
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const MyApp = () => {
  // const [color,setColor] = useState("grey")
  const [notes, setNotes] = useState([]);
  const classes = useStyles();
  const [searchText, setSearchText] = useState('');
  const [mode, setMode] = useState('dark');
  // const click = color =>{setColor(color)}
  // useEffect(()=>{
  //   document.body.style.backgroundColor= color;
  // },[color]) 

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'dark' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          text: {
            primary: '#000000', // Set text color to black
            secondary: '#000000', // Custom text color for secondary text if needed
          },
        },
      }),
    [mode]
  );
  console.log(colorMode);
  return (
    // <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        {/* <Grid container spacing={2}>
        <ButtonGroup className={classes.h1tag} variant="outlined" aria-label="Basic button group">
          <Button onClick={()=>{click("#ca7c67")}}>One</Button>
          <Button onClick={()=>{click("#DFFF00")}}>Two</Button>
          <Button onClick={()=>{click("#6495ED")}}>Three</Button>
        </ButtonGroup>
        <OutlinedDiv label="Color Picker">
        <Grid container justify="center" alignItems="center">
          <Avatar style={{ backgroundColor: deepOrange[500] }} />
          <Avatar style={{ backgroundColor: deepPurple[500] }} />
          <Avatar style={{ backgroundColor: red[500] }} />
          <Avatar style={{ backgroundColor: green[500] }} />
          <Avatar style={{ backgroundColor: blue[500] }} />
        </Grid>
      </OutlinedDiv>
          
        </Grid> */}
        <Container >
      
      </Container>
        <div className={classes.container}>
          <Header />

          <Search handleSearchNote={setSearchText} />
          <NotesList
            notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
            handleAddNote={addNote}
            handleDeleteNote={deleteNote }
          />
        </div>
      </div>
    </ThemeProvider>
    // </ColorModeContext.Provider>
  );
};

export default MyApp;
