import React from 'react';
import { IconButton } from '@mui/material';
import { useStyles } from './styling';

const ColorPicker = ({ color, onClick }) => {
  const classes = useStyles({ color });

  return (
    <IconButton className={classes.colorPicker} onClick={onClick}>
      {/* Empty content since the background color represents the color */}
    </IconButton>
  );
};

export default ColorPicker;