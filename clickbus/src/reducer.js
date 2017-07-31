//import { NOT_FOUND } from 'redux-first-router'

export const route = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_SUCCESS':
      return action.response.items;
    default: return state;
  }
}

export const place = (state = [], action) => {
  switch(action.type) {
    case 'RANDOM_FETCH_SUCCESS':
      return action.response;
    default: return state;
  }
}

export const page = (state = null, action) => {
  switch(action.type) {
    case 'HOME':
       return 'homePage'
    case 'RESULTS':
       return 'resultsPage'
    default:
      return state
  }
}

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
