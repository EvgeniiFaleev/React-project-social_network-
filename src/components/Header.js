import React from 'react';
import  classes  from './Header.module.scss'

export default function Header() {
  return (
    <header className={classes.header}>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Inkscape.logo.svg/390px-Inkscape.logo.svg.png'/>
    </header>
  );
}