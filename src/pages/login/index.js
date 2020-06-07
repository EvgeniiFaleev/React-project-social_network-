import {CommonTemplate} from "../../ui/templates/Common";
import React from "react";
import {Login} from "../../features/autnentification";


export const LoginPage = () => {
  return(
    <CommonTemplate>
      <Login/>
    </CommonTemplate>
  )
};