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
      ({...state, ...payload})
  }
})


export const GetConformityChartDetail = (reportId: number, dispatch: Dispatch) =>
  useQuery<AxiosResponse<Report>, ErrorResponsesType>(
    'GetConformityChartDetail',
    () => axios.get(`/report/${reportId}`),
    {
      onSuccess: ({data}) => {
        console.log('conformityChartData: ', data.conformityChart)
        dispatch(conformityChartModel.actions.addConformityChartData(data.conformityChart))

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
