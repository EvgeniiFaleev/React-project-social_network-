export const updateArrayOfItemsWithId = (items,
  itemId,
  newItemObjProps) => {
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