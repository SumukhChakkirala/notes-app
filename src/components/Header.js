import React from 'react'
import { useStyles } from './styling'

const Header = ({handleToggleDarkMode}) => {
  const classes = useStyles()
  return (
    <div className={classes.header}>
      <h1>Notes</h1>
      <button onClick={() => 
      handleToggleDarkMode(
        (previousDarkMode) => !previousDarkMode
      )} className={classes.save}>Toggle Mode</button>
    </div>
  )
}

export default Header
