import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';
import { useStyles } from './components/styling';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
const App = () => {
	const [notes, setNotes] = useState([]);

	const classes = useStyles()

	const [searchText, setSearchText] = useState('');

	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
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

	const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            // Customize other theme options as needed
			text: {
				primary: '#000000', // Set text color to black
				secondary: '#000000', // Custom text color for secondary text if needed
			  },
        },
    });

    return (
        <ThemeProvider theme={theme}>
			<CssBaseline style={{ color: theme.palette.text.secondary }}/>
            <div className={`${darkMode ? classes.darkMode : ''}`}>
                <div className={classes.container}>
                    <Header handleToggleDarkMode={setDarkMode} />
                    <Search handleSearchNote={setSearchText} />
                    <NotesList
                        notes={notes.filter((note) =>
                            note.text.toLowerCase().includes(searchText)
                        )}
                        handleAddNote={addNote}
                        handleDeleteNote={deleteNote}
                    />
                </div>
            </div>
        </ThemeProvider>
    );
};

export default App;