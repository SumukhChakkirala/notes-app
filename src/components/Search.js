import { makeStyles } from '@material-ui/core'
import React from 'react'
import { MdSearch } from 'react-icons/md'
import SearchIcon from '@mui/icons-material/Search';
import { useStyles } from './styling';


const Search = ({handleSearchNote}) => {
  const classes = useStyles()
  return (
    <div className={classes.search}>
        <SearchIcon className='search-icons' size='1.3em' />
        <input onChange={(event) =>handleSearchNote(event.target.value) } type='text' placeholder='type to search...'/>
      
    </div>
  )
}

export default Search
