import { ADD_USER_DATA } from './actions';

const initialState = {
  userData: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;