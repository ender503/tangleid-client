import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = function (state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const persistConfig = {
  key: 'root',
  storage,
}

const initialState = {}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(persistedReducer, initialState)
  let persistor = persistStore(store)
  return { store, persistor }
}
