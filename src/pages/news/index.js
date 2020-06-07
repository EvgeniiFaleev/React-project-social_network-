import {CommonTemplate} from "../../ui/templates/Common";
import React from "react";
import {News} from "../../features/news";


export const NewsPage = () => {
  return(
    <CommonTemplate>
      <News/>
    </CommonTemplate>
  )
};