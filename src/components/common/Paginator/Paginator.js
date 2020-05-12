import React, {useState} from "react";
import classes from "./Paginator.module.scss"


export const Paginator = ({portionSize = 10, ...props}) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(Math.ceil(
    props.currentPage / portionSize));
  let leftPortionPageNumber = (
    portionNumber - 1
  ) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;
  let currentPages = pages
    .filter(
      p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
    .map((p) => {
      return <span
        className={p === props.currentPage ?
          `${classes.pageNumber} ${classes.selectedPage}` :
          classes.pageNumber}
        key={p}
        onClick={() => {
          props.onPageChanged(p);
        }}>{p}</span>
    });

  return (
    <div className={classes.paginator}>
      {portionNumber > 1 && <button onClick={() => {
        setPortionNumber(portionNumber - 1)
      }}>PREV</button>}

      {currentPages}
      {portionCount > portionNumber && <button onClick={() => {
        setPortionNumber(portionNumber + 1)
      }}>NEXT</button>}
    </div>
  )
};