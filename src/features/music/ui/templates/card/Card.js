import React from "react";
import styles from "./Card.module.scss"


export const Card = ({id, link, artistName, title, picture, font_size}) => {
  return (
    <section className={styles.card} key={id}>
      {title || artistName ?
        <p style={{
          "fontSize": font_size
        }} className={styles.card_name}><a
          href={link}>{title || artistName}
        </a>
        </p> :
        ""}
      <a href={link}>
        <img src={picture} alt={artistName}/>
      </a>
    </section>
  )
};