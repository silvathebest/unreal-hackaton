import {createSelector, createSlice, Dispatch, PayloadAction} from '@reduxjs/toolkit'
import axios, {AxiosResponse} from 'axios'
import {useQuery} from 'react-query'
import {useSelector} from 'react-redux'
import {ErrorResponsesType} from 'shared/types'

export type ReportDetail = {
  id: number
  gender: string
  clientDateBirth: string
  clientId: number
  idMKB: string
  diagnosis: string
  position: string
  standard: number
  appointments: string
  serviceDate: string
}

type InitialStateProps = {
  data: ReportDetail[]
  count: number
}

const initialState: InitialStateProps = {
  data: [],
  count: 0
}

export const reportDetailModel = createSlice({
  name: 'reportDetail',
  initialState,
  reducers: {
    addReportDetails: (state, {payload}: PayloadAction<{data: ReportDetail[], count: number}>) => {
      state.data = payload.data
      state.count = payload.count
    },
  }
})

export const {} = reportDetailModel.actions

export const limitReportDetail = 50

export const GetReportDetail = ({filter, page, reportId}: {filter: string, page: number, reportId: number}, dispatch: Dispatch) =>
  useQuery<AxiosResponse<{data: ReportDetail[], count: number}>, ErrorResponsesType>(
    'GetReportDetail',
    () => axios.get('/reportDetail', {params: {filter: filter || null, page, limit: limitReportDetail, reportId}}),
    {
      onSuccess: ({data}) => {
        dispatch(reportDetailModel.actions.addReportDetails({
          data: data.data.map((item) => ({...item, standard: Math.floor(Math.random() * 3 + 1)})),
          count: data.count
        }))
      },
      enabled: false,
      refetchOnWindowFocus: false,
      retry: false,
    }
  )

export const useGetReportDetailsData = () => useSelector(
  createSelector(
    (state: RootState) => state.reportDetail.data,
    (reportDetail) => reportDetail
  )
)

export const useGetReportDetailsCountPage = () => useSelector(
  createSelector(
    (state: RootState) => state.reportDetail.count,
    (count) => {
      return Math.ceil(count / limitReportDetail)
    }
  )
)