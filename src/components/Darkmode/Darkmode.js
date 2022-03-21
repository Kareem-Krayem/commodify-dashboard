import React from 'react';
import '../Darkmode/Darkmode.css';
import { IconButton } from '@material-ui/core';
import { BrightnessHigh, Brightness4 } from '@material-ui/icons';
function Darkmode() {
  let clickedClass = 'clicked';
  const body = document.body;
  const lightTheme = 'light';
  const darkTheme = 'dark';
  let mode;

  if (localStorage) {
    mode = localStorage.getItem('mode');
  }
  if (mode === lightTheme || mode === darkTheme) {
    body.classList.add(mode);
  } else {
    body.classList.add(lightTheme);
  }
  const switchTheme = (e) => {
    if (mode === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem('mode', 'light');
      mode = lightTheme;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem('mode', 'dark');
      mode = darkTheme;
    }
  };
  return (
    <IconButton
      classNam={mode == 'dark' ? clickedClass : ''}
      id='darkMode'
      onClick={(e) => switchTheme(e)}
    >
      <BrightnessHigh />
    </IconButton>
  );
}

export default Darkmode;
