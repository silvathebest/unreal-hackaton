import {createSelector, createSlice, Dispatch, PayloadAction} from '@reduxjs/toolkit'
import axios, {AxiosResponse} from 'axios'
import {useQuery} from 'react-query'
import {useSelector} from 'react-redux'
import {ErrorResponsesType} from 'shared/types'
import {
  CardiologyChart,
  ConformityChart,
  NeurologyChart,
  OtolaryngologyChart
} from '../сhartData'

export const UploadReport = (formData: FormData): Promise<AxiosResponse<{reportId: number}, null>> =>
  axios.post('report/upload', formData)

export const CheckReportStatus = (reportId: number): Promise<AxiosResponse<{status: boolean}, null>> =>
  axios.get(`report/status/${reportId}`)

export type Report = {
  id: number
  icon: string
  name: string
  createdAt: string
  updatedAt: string
  userId: string
  status: number
  count: number,

  conformityChart: ConformityChart
  neurologyChart: NeurologyChart
  cardiologyChart: CardiologyChart
  otolaryngologyChart: OtolaryngologyChart
}

type InitialStateProps = {
  data: Report[]
}

const initialState: InitialStateProps = {
  data: []
}

export const reportModel = createSlice({
  name: 'report',
  initialState,
  reducers: {
    addReports: (state, {payload}: PayloadAction<Report[]>) => {
      state.data = payload
    },
  }
})

export const {} = reportModel.actions

export const ReportGetAll = (filter: string, dispatch: Dispatch) =>
  useQuery<AxiosResponse<{data: Report[]}>, ErrorResponsesType>(
    'ReportGetAll',
    () => axios.get('/report', {params: {filter: filter || null}}),
    {
      onSuccess: ({data}) => {
        dispatch(reportModel.actions.addReports(data.data))
      },
      enabled: false,
      refetchOnWindowFocus: false,
      retry: false,
    }
  )

export const useGetAllReports = () => useSelector(
  createSelector(
    (state: RootState) => state.report.data,
    (reports) => reports
  )
)