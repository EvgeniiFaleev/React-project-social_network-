import React, {useEffect} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {useAuthRedirect} from "@auth/hooks/useAuthRedirect";
import {Preloader} from "@ui";
import {ProfileInfo} from "@profile/ui/organisms/ProfileInfo/ProfileInfo";
import * as profileActions from "@profile/modules/profile/actions";
import profileCommon from "@profile/ui/assets/profileCommon.jpg";
import avatarUndefined from "@ui/assets/images/avatar-undefined.jpg"
import {useParams} from "react-router";


export const Profile = () => {

  useAuthRedirect();
  const selectedId = useParams().userId;
  const dispatch = useDispatch();
  const {profile, authUserId} = useSelector((state) => {
    return {
      profile: state.profile.profile,
      authUserId: state.auth.user.userId
    }
  }, shallowEqual);


  let userId = selectedId|| authUserId;

  useEffect(() => {
    dispatch(profileActions.getUser(userId));
    dispatch(profileActions.getStatus(userId));
    return(() => {
      dispatch(profileActions.setUserProfile(null))
    })
  }, [selectedId, dispatch]);

  return (
    <>
      { !profile ?
        <Preloader/> :
        (
          <>
            <ProfileInfo authUserId={authUserId} profile={profile}
              userId={userId}
              head_img={profileCommon}
              myAva_img={profile.photos.small || avatarUndefined}
            />
          </>
        )}
    </>
  );
};
