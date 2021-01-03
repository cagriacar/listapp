export const initialState = {
  lists: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_LIST":
      return {
        ...state,
        lists: [...state.lists, action.payload],
      };
    case "REMOVE_LIST":
      return {
        ...state,
        lists: [...state.lists].filter((list) => list.id !== action.payload),
      };

    case "UPDATE_LIST":
      return {
        ...state,
        lists: [...state.lists, action.payload],
      };
    default:
      return {
        ...state,
      };
  }
};
export default reducer;
