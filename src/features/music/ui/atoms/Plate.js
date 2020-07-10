import classes from "../../Music.module.scss";
import React from "react";


export const Plate = ({id, pictureLink, title, artistName, children,picture, artistLink}) => {
return(
  <section className={classes.artists_block} key={id}>
    <a href={pictureLink}>
      <img src={picture} alt={artistName || title}/></a>
    <a href={artistLink}>
      <p>{artistName}</p>
    </a>
    <p>{title}</p>
    {children}
  </section>
)
};