import React from "react";
import classes from "./ProfileInfo.module.scss";

export default function ProfileInfo(props) {
  return (
    <div className={classes.profileInfo}>
      <img className={classes.head_image} src={props.head_img} />
      <div className={classes.bio}>
        <img className={classes.myAva} src={props.myAva_img} />
        <div className={classes.description}>{props.description}</div>
      </div>
    </div>
  );
}
