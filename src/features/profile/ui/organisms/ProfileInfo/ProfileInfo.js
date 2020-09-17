import React, {useEffect} from "react";
import classes from "./ProfileInfo.module.scss";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {ProfileDescription} from "@profile/ui/molecules/ProfileDescription/ProfileDescription";
import {ProfileStatus} from "@profile/ui/atoms/ProfileStatus/ProfileStatus";
import {profileActions} from "@profile/modules/profile";
import {Link} from "react-router-dom";


export const ProfileInfo = ({userId, profile, authUserId, ...props}) => {
  const dispatch = useDispatch();

  const isOwner = userId === authUserId;
  const {followed, isFollowing} = useSelector((state) => (
    {
      followed: state.profile.followed,
      isFollowing: state.profile.isFollowing
    }
  ), shallowEqual);
  const onSaveFile = (e) => {
    if (e.target.files.length) dispatch(profileActions.savePhoto(e.target.files[0]));
  };

  useEffect(() => {
    dispatch(profileActions.isUserFollowed(userId));
  }, [dispatch, userId]);

  return (
    <div className={classes.profileInfo_wrapper}>

      <div className={classes.userPhoto_block}>
        <label>
          <img alt="avatar"
            className={`${classes.userPhoto} ${isOwner &&
            classes.ownerPhoto}`} src={props.myAva_img}/>
          {isOwner &&
          <input hidden onChange={onSaveFile} type="file"/>}
        </label>
      </div>

      <section className={classes.profileInfo}>
        <div className={classes.userName_container}>
          <p className={classes.userName}>{profile.fullName}</p>
          <ProfileStatus dispatch={dispatch} isOwner={isOwner}
            userId={userId}/>

          <div className={classes.buttons}>
            {isOwner || <Link to={`/dialogs/${userId}`}>
            <button> Send
              message
            </button>
          </Link>}
            {isOwner || (
              followed ?
                <button disabled={isFollowing}
                  onClick={() => dispatch(profileActions.unFollowUser())}>Unfollow</button> :
                <button disabled={isFollowing}
                  onClick={() => {
                    dispatch(profileActions.followUser())
                  }}>Follow</button>
            )}
          </div>
        </div>
        <ProfileDescription profile={profile} isOwner={isOwner}/>
      </section>


    </div>
  );
};
