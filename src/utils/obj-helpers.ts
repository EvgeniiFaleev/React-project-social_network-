import {UsersItemType} from "@socialAPI";

export const updateArrayOfItemsWithId = (items: Array<UsersItemType>,
  itemId:number,  newItemObjProps: {followed: boolean}):  Array<UsersItemType> => {
  return items.map((item) => {
    if (item.id === itemId) {
      return {
        ...item, ...newItemObjProps
      };
    } else {
      return item;
    }
  })
};