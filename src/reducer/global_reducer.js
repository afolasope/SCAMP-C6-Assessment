import { TOGGLE_AMOUNT, TOGGLE_NAV } from '../actions';

const reducer = (state, action) => {
  if (action.type === TOGGLE_NAV) {
    return { ...state, nav_is_open: !state.nav_is_open };
  }
  if (action.type === TOGGLE_AMOUNT) {
    let tempAmount;
    if (action.payload === 'inc') {
      tempAmount = state.amount + 1;
    } else if (action.payload === 'dec') {
      tempAmount = state.amount - 1;
      if (state.amount === 0) {
        tempAmount = 0;
      }
    }
    return {
      ...state,
      amount: tempAmount,
    };
  }

  return { ...state };
};

export default reducer;
