import React, { useState, useEffect } from 'react';
import { useStyles } from './styling';
import { IconButton, Grid, Container } from '@mui/material';
import Fingerprint from '@mui/icons-material/Fingerprint';
import ButtonGroup from '@mui/material/ButtonGroup';

const Header = ({ handleToggleDarkMode }) => {
  const classes = useStyles();
  const [color, setColor] = useState("grey");

  const click = (color) => {
    setColor(color);
  };

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div>
      <Grid container>
        <Grid container rowSpacing={1}>
        <h1 className={classes.h1tag}>Notes</h1>
        <Grid item>
            <IconButton onClick={() => click("#f44336")} aria-label="fingerprint" color="error">
              <Fingerprint fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton onClick={() => click("#66bb6a")} aria-label="fingerprint" color="success">
              <Fingerprint  fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton onClick={() => click("#ffa726")}    aria-label="fingerprint" color="warning">
              <Fingerprint  fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton onClick={() => click("#29b6f6")}    aria-label="fingerprint" color="info">
              <Fingerprint  fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton onClick={() => click("white")}    aria-label="fingerprint" color='palette.primary.light'>
              <Fingerprint  fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
