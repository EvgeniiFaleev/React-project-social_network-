import {CommonTemplate} from "@ui/templates/Common";
import React, {FC} from "react";
import {News} from "@news";


export const NewsPage:FC= () => {
  return(
    <CommonTemplate>
      <News/>
    </CommonTemplate>
  )
};