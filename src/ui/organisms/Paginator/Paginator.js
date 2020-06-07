import React, {useState} from "react";
import classes from "./Paginator.module.scss"


export const Paginator = ({
  portionSize = 10, totalUsersCount, pageSize, currentPage, onPageChanged
}) => {

  const pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);

  const [portionNumber, setPortionNumber] = useState(Math.ceil(
    currentPage / portionSize));

  const leftPortionPageNumber = (
    portionNumber - 1
  ) * portionSize + 1;

  const rightPortionPageNumber = portionNumber * portionSize;

  const currentPages = pages
    .filter(
      p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
    .map((p) => {
      return <span
        className={p === currentPage ?
          `${classes.pageNumber} ${classes.selectedPage}` :
          classes.pageNumber}
        key={p}
        onClick={() => {
          onPageChanged(p);
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