import React from "react";
import classes from "./Contacts.module.scss"


const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export const Contacts = ({contacts}) => {

  const newElements = Object.entries(contacts).map((item) => {
    return <p className={classes.contacts_item}
      key={item[0]}>{capitalizeFirstLetter(item[0])}:  {item[1] ?
      <a className={classes.contacts_link} href={item[1]}>{item[1]}</a> :
      "..."}</p>
  });

  return (
    <>
      <h3 className={classes.contacts_header}>Contacts</h3>
      <section className={classes.contacts}>

        {newElements}
      </section>
    </>
  )
};