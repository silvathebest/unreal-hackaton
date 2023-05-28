import {configureStore} from '@reduxjs/toolkit'
import {conformityChartModel} from 'entities/confirmityChart'
import {reportModel} from 'entities/report'
import {reportDetailModel} from 'entities/reportDetail'
import {userModel} from 'entities/user'

export const store = configureStore({
  reducer: {
    user: userModel.reducer,
    report: reportModel.reducer,
    reportDetail: reportDetailModel.reducer,
    conformityChart: conformityChartModel.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
