import {createSelector, createSlice, Dispatch, PayloadAction} from '@reduxjs/toolkit'
import axios, {AxiosResponse} from 'axios'
import {useQuery} from 'react-query'
import {useSelector} from 'react-redux'
import {ErrorResponsesType} from '../../shared/types'
import {Report} from '../report'

export type ConformityChart = {
  count: number,
  contactingPercentage: number,
  patientCount: number,
  specialistCount: number,
  correspondingCount: number,
  correspondingPercent: number,
  additionalAppointmentsCount: number,
  additionalAppointmentsPercent: number,
  partiallyCount: number,
  partiallyPercent: number,
}

export type NeurologyChart = ConformityChart
export type CardiologyChart = ConformityChart
export type OtolaryngologyChart = ConformityChart

const initialState: ConformityChart = {
  count: 0,
  contactingPercentage: 0,
  patientCount: 0,
  specialistCount: 0,
  correspondingCount: 0,
  correspondingPercent: 0,
  additionalAppointmentsCount: 0,
  additionalAppointmentsPercent: 0,
  partiallyCount: 0,
  partiallyPercent: 0,
}

export const conformityChartModel = createSlice({
  name: 'conformityChart',
  initialState,
  reducers: {
    addConformityChartData: (state, {payload}: PayloadAction<ConformityChart>) =>
      ({...state, ...payload}),
  }
})

export const neurologyChartModel = createSlice({
  name: 'neurologyChart',
  initialState,
  reducers: {
    addNeurologyChartData: (state, {payload}: PayloadAction<NeurologyChart>) =>
      ({...state, ...payload})
  }
})

export const cardiologyChartModel = createSlice({
  name: 'cardiologyChart',
  initialState,
  reducers: {
    addCardiologyChartData: (state, {payload}: PayloadAction<NeurologyChart>) =>
      ({...state, ...payload})
  }
})

export const otolaryngologyChartModel = createSlice({
  name: 'otolaryngologyChart',
  initialState,
  reducers: {
    addOtolaringologyChartData: (state, {payload}: PayloadAction<NeurologyChart>) =>
      ({...state, ...payload})
  }
})

export const GetConformityChartDetail = (reportId: number, dispatch: Dispatch) =>
  useQuery<AxiosResponse<Report>, ErrorResponsesType>(
    'GetConformityChartDetail',
    () => axios.get(`/report/${reportId}`),
    {
      onSuccess: ({data}) => {
        dispatch(conformityChartModel.actions.addConformityChartData(data.conformityChart))
        dispatch(neurologyChartModel.actions.addNeurologyChartData(data.neurologyChart))
        dispatch(cardiologyChartModel.actions.addCardiologyChartData(data.cardiologyChart))
        dispatch(otolaryngologyChartModel.actions.addOtolaringologyChartData(data.otolaryngologyChart))
      },
      enabled: false,
      refetchOnWindowFocus: false,
      retry: false,
    }
  )

export const useGetConformityChartDetail = () => useSelector(
  createSelector(
    (state: RootState) => state.conformityChart,
    (data) => data
  )
)

export const useGetNeurologyChartDetail = () => useSelector(
  createSelector(
    (state: RootState) => state.neurologyChart,
    (data) => data
  )
)

export const useGetCardiologyChartDetail = () => useSelector(
  createSelector(
    (state: RootState) => state.cardiologyChart,
    (data) => data
  )
)

export const useGetOtolaringologyChartDetail = () => useSelector(
  createSelector(
    (state: RootState) => state.otolaringologyChart,
    (data) => data
  )
)
