import React from "react";


export const Contacts = ({contacts}) => {

const newElems= Object.entries(contacts).map((item) => {
  return <p>{item[0]}: {item[1] || " Empty field"}</p>
});

  return (
    <section>
      {newElems}
    </section>
  )
};