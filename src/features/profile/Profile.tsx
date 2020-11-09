import React, {FC, useEffect} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {useAuthRedirect} from "@auth/hooks/useAuthRedirect";
import {Preloader} from "@ui";
import {ProfileInfo} from "@profile/ui/organisms/ProfileInfo/ProfileInfo";
import * as profileActions from "@profile/modules/profile/actions";
import avatarUndefined from "@ui/assets/images/avatar-undefined.jpg"
import {useParams} from "react-router";
import {RootState} from "@store/root-reducer";

interface IProfileParams {
  userId?: string
}

export const Profile: FC = () => {

  useAuthRedirect();

  const selectedId = useParams<IProfileParams>().userId;
  const dispatch = useDispatch();
  const {profile, authUserId} = useSelector((state: RootState) => {
    return {
      profile: state.profile.profile,
      authUserId: state.auth.user.userId
    }
  }, shallowEqual);

  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  let userId = selectedId || authUserId;

  useEffect(() => {
    if (isAuth) {
      dispatch(profileActions.getUser(+userId!));
      dispatch(profileActions.getStatus(+userId!));
    }
    return (() => {
      dispatch(profileActions.setUserProfile(null))
    })
  }, [selectedId, dispatch, isAuth, userId]);

  return (
      <>
        {!profile ?
            <Preloader/> :
            (
                <>
                  <ProfileInfo authUserId={authUserId as number}
                      profile={profile}
                      userId={userId as number}
                      isAuth={isAuth}
                      // head_img={profileCommon}
                      myAva_img={profile.photos?.small || avatarUndefined}
                  />
                </>
            )}
      </>
  );
};
