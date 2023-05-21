import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'

import api from '../service/api'

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>

export default store
