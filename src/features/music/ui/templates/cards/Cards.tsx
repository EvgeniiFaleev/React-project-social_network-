import styles from "./Cards.module.scss";
import {Preloader} from "@ui";
import React, {FC} from "react";

interface ICardsProps {
  header: string
  // we have children in FC type
}

export const Cards: FC<ICardsProps>= ({children, header}) => {


  return (
    <>
      <h3 className={styles.cards_header}>{header}</h3>
      <div className={styles.cards}>
        {children || <Preloader/>}
      </div>
    </>
  )
};