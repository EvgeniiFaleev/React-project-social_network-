import React from "react";
import styles from "./Arrow.module.scss"

export const Arrow = ({back}) => {
 return <i className={`fa fa-angle-left ${styles.back}`} onClick={back}aria-hidden="true"/>
};