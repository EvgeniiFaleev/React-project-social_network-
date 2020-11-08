import React, {ChangeEvent, FC, useEffect} from "react";
import classes from "./ProfileInfo.module.scss";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {ProfileDescription} from "@profile/ui/molecules/ProfileDescription/ProfileDescription";
import {ProfileStatus} from "@profile/ui/atoms/ProfileStatus/ProfileStatus";
import {profileActions} from "@profile/modules/profile";
import {Link} from "react-router-dom";
import {ProfileType} from "@socialAPI";
import {RootState} from "@store/root-reducer";

interface IProfileInfoProps {
  userId : number
  profile: ProfileType
  myAva_img: string
  authUserId: number
}
export const ProfileInfo:FC<IProfileInfoProps> = ({userId, profile, authUserId, myAva_img}) => {

  const dispatch = useDispatch();

  const isOwner:boolean = userId === authUserId;

  const {followed, isFollowing} = useSelector((state:RootState) => {
    return {
      followed: state.profile.followed,
      isFollowing: state.profile.isFollowing
    }
}, shallowEqual);

  const onSaveFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files!.length) dispatch(profileActions.savePhoto(e.target.files![0]));
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
            classes.ownerPhoto}`} src={myAva_img}/>
          {isOwner &&
          <input hidden onChange={onSaveFile} type="file"/>}
        </label>
      </div>

      <section className={classes.profileInfo}>
        <div className={classes.userName_container}>
          <p className={classes.userName}>{profile.fullName}</p>
          <ProfileStatus dispatch={dispatch} isOwner={isOwner}/>

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
