export const ACTION_DATA_SHOES = {
  DATA_SHOES: 'DATA_SHOES',
  PENDING: 'PENDING',
  DATA_SORT: 'DATA_SORT',
};

export const initialState = {
  data: null,
  data_sort: null,
  status: -1,
};

export const reducerDataShoes = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_DATA_SHOES.DATA_SHOES:
      return {
        ...state,
        status: 1,
        data: action.payload,
      };
    case ACTION_DATA_SHOES.DATA_SORT:
      return {
        ...state,
        data_sort: action.payload,
      };
    case ACTION_DATA_SHOES.PENDING:
      return {
        ...state,
        status: 0
      };
    default:
      return {
        ...state,
      };
  }
};
