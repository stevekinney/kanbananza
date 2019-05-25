export const LIST_CREATE = 'LIST_CREATE';
export const LIST_DELETE = 'LIST_DELETE';

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

export const removeList = listId => {
  return {
    type: LIST_DELETE,
    payload: { listId },
  };
};
