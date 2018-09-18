import { SET_SEARCH_FIELD } from './constants.js'

export const setSearchField = (inputText) =>({
  type: SET_SEARCH_FIELD,
  payload: inputText
})
