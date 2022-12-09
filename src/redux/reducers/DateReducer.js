import { MONTH_SELECTED, NEXT_MONTH, PREV_MONTH, TODAY } from "../types/DateTypes";

const initialState = {
  date: new Date(),
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
};

export const DateReducer = (state = initialState, action) => {
  switch (action.type) {
    case PREV_MONTH: {
        return {...state}
    }
    case NEXT_MONTH: {
        return {...state}
    }
    case TODAY: {
      return {...state, date: new Date()}
    }
    case MONTH_SELECTED: {
      return {...state}
    }
    default:
      return state;
  }
};
