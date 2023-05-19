import {configureStore} from '@reduxjs/toolkit'
import {userModel} from 'entities/user'

export const store = configureStore({
  reducer: {
    user: userModel.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
