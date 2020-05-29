import React from "react";


export const Contacts = ({contacts}) => {

const newElements= Object.entries(contacts).map((item) => {
  return <p>{item[0]}: {item[1] || " Empty field"}</p>
});

  return (
    <section>
      {newElements}
    </section>
  )
};