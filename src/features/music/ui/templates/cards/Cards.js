import styles from "./Cards.module.scss";
import {Preloader} from "../../../../../ui";
import React from "react";


export const Cards= ({children, header}) => {


  return (
    <>
      <h3 className={styles.cards_header}>{header}</h3>
      <div className={styles.cards}>
        {children || <Preloader/>}
      </div>
    </>
  )
};