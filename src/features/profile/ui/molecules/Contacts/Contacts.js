import React from "react";
import classes from "./Contacts.module.scss"


export const Contacts = ({contacts}) => {

  const newElements = Object.entries(contacts).map((item) => {
    return <p className={classes.contacts_item}
      key={item[0]}>{item[0]}: {item[1] || " Empty" + " field"}</p>
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