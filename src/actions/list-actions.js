export const LIST_CREATE = 'LIST_CREATE';

const defaultListData = {
  title: '',
  cards: [],
};

export const createList = listData => {
  const listId = Date.now().toString();
  const list = {
    id: listId,
    ...defaultListData,
    ...listData,
  };
  return {
    type: LIST_CREATE,
    payload: { list, listId },
  };
};
