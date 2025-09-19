import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { combineReducers } from '@reduxjs/toolkit'

import { userSlice } from './slice/userSlice'

// Persist configuration
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [ 'user'], 
 
}

// Combine reducers
const rootReducer = combineReducers({

  user: userSlice,
//   api: apiSlice.reducer
})

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE']
      }
    })
    // .concat(apiSlice.middleware)
    // Add logger in development
    .concat(__DEV__ ? require('redux-logger').default : []),
  devTools: __DEV__
})

export const persistor = persistStore(store)

// Export types for TypeScript (optional)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch