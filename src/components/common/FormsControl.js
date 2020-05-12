import React from "react";
import classes from "./FormsControl.module.scss";


export const FormsControl = ({meta: {touched, error}, children}) => {

  let err = touched && error ?
    <p className={classes.error}>{error}</p> : "";
  return (
    <>
      {children}
      {err}
    </>
  )
};
// =====================Wrapper==============
export const Input = (props) => {
  return (
    <FormsControl {...props}><input {...props.input} type={props.type}
      className={props.meta.touched && props.meta.error ?
        classes.input_error : ""}
      placeholder={props.placeholder}/></FormsControl>
  )
};
