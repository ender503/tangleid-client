import { createStore } from 'redux'

const rootReducer = function (state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const initialState = {}

export default () => {
  let store = createStore(rootReducer, initialState)
  return { store }
}
