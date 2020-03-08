import React from 'react';
import classes from './Profile.module.scss';

export default function Profile() {
  return (
    <main className={classes.content}>
      <img
        src='https://p.bigstockphoto.com/eIdTXLbqQilMs9xbjvcs_bigstock-Aerial-View-Of-Sandy-Beach-Wit-256330393.jpg'/>
      <div className={classes.bio}>
        <img
          className={classes.ava}
          src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'/>
        <div>description</div>
      </div>
      <div className={classes.posts}>
        <div className={classes.item}>Post 1</div>
        <div className={classes.item}>Post 1</div>
        <div className={classes.item}>Post 1</div>
        <div className={classes.item}>Post 1</div>
        <div className={classes.item}>Post 1</div>
        <div className={classes.item}>Post 1</div>
        <div className={classes.item}>Post 1</div>
        <div className={classes.item}>Post 1</div>
        <div className={classes.item}>Post 1</div>

      </div>

    </main>
  );
}