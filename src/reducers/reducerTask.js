import { ADD_TASK, DELETE_TASK, COMPLETE_TASK } from '../actions/actions.Types';

const initialState = [];

export const reducerTask = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case DELETE_TASK:
      return state.filter(el => el.key !== action.payload);
    case COMPLETE_TASK:
      return state.map(el =>
        el.key === action.payload ? { ...el, checked: !el.checked } : el
      );

    default:
      return state;
  }
};
