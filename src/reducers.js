import { SET_SEARCH_FIELD } from './constants.js';

const initialState={
  searchField: ''
}

export const SearchRepo = (state=initialState, action={}) =>{
  switch(action.type){
    case SET_SEARCH_FIELD:
      return Object.assign({}, state, {searchField: action.payload})
    default:
      return state;
  }
}
