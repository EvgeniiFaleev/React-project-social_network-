import classes from "./Footer.module.scss"
import React, {FC} from "react";


export const Footer: FC = () => {
  return (
      <footer className={classes.footer}>
        <p className={classes.footer_content}>Evgeniy Faleev © 2020.
          All
          rights are not reserved
        </p>
      </footer>
  )
};