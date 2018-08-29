import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'

import reducers from '../reducers'

const persistConfig = {
  key: 'root',
  storage,
}

const initialState = {}

const persistedReducer = persistReducer(persistConfig, reducers)

export default () => {
  let store = createStore(persistedReducer, initialState, applyMiddleware(logger))
  let persistor = persistStore(store)
  return { store, persistor }
}
