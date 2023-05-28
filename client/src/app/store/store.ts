import {configureStore} from '@reduxjs/toolkit'
import {reportModel} from 'entities/report'
import {reportDetailModel} from 'entities/reportDetail'
import {userModel} from 'entities/user'
import {
  cardiologyChartModel,
  conformityChartModel,
  neurologyChartModel,
  otolaryngologyChartModel
} from 'entities/сhartData'

export const store = configureStore({
  reducer: {
    user: userModel.reducer,
    report: reportModel.reducer,
    reportDetail: reportDetailModel.reducer,
    conformityChart: conformityChartModel.reducer,
    neurologyChart: neurologyChartModel.reducer,
    cardiologyChart: cardiologyChartModel.reducer,
    otolaringologyChart: otolaryngologyChartModel.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
