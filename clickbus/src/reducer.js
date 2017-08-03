//import { NOT_FOUND } from 'redux-first-router'

export const route = (state = [], action) => {
  const { type, payload } = action;
  switch(type) {
    case 'FETCH_SUCCESS':
      return payload.items;
    default: return state;
  }
};

export const page = (state = null, action) => {
  const { type } = action;
  switch(type) {
    case 'HOME':
      return 'homePage';
    case 'RESULTS':
      return 'resultsPage';
    case 'SEAT_MAP':
      return 'seatMapPage';
    default:
      return state
  }
};

/*export const locred = (state = null, action = {}) => {
  switch(action.type) {
    case 'HOME':
    case NOT_FOUND:
      return null
    case 'RESULTS':
      return null
    default:
      return state
  }
}*/
