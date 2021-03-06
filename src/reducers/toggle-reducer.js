import * as types from '../actions/action-types';

export default (state = [], action) => {
  switch (action.type) {
    case types.TOGGLE_VALUE:
      return {
        ...state,
        value: !state.value
      };
    default:
      return state;
  }
};
