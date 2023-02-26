import { combineReducers, configureStore } from '@reduxjs/toolkit'
import sortReducer from './reducers/SortSlice'
import { api } from '../services/api'

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  sort: sortReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(api.middleware),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
