import {configureStore} from '@reduxjs/toolkit'
import {reportModel} from 'entities/report'
import {userModel} from 'entities/user'

export const store = configureStore({
  reducer: {
    user: userModel.reducer,
    report: reportModel.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
