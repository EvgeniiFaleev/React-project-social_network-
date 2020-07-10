import {CommonTemplate} from "../../ui/templates/Common";
import {Users, usersActions} from "../../features/users";
import React from "react";
import {useDispatch} from "react-redux";


export const UsersPage =  () => {

return(
 <CommonTemplate >
   <Users />
 </CommonTemplate>
)
};