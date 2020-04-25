import React from "react";
import classes from "./FormsControl.module.scss";


export const FormsControl = ({meta, input, ...props}) => {

  let error = meta.touched && meta.error ?
    <p className={classes.error}>{meta.error}</p> : "";
  return (
    <>
      {props.children}
      {error}
    </>
  )
};
// =====================Wrapper==============
export const Input = (props) => {
  return (
    <FormsControl {...props}><input {...props.input}
      className={props.meta.touched && props.meta.error ? classes.input_error : ""}
      placeholder={props.placeholder}/></FormsControl>
  )
};