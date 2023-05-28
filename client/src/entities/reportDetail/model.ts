import {createSelector, createSlice, Dispatch, PayloadAction} from '@reduxjs/toolkit'
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'
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
  conformity: number
  appointments: string
  serviceDate: string
  reportId: number
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
    }
  }
})

export const {} = reportDetailModel.actions

export const limitReportDetail = 50

export const GetReportDetail = ({filter, page, reportId}: {
  filter: string,
  page: number,
  reportId: number
}, dispatch: Dispatch) =>
  useQuery<AxiosResponse<{data: ReportDetail[], count: number}>, ErrorResponsesType>(
    'GetReportDetail',
    () => axios.get('/reportDetail', {params: {filter: filter || null, page, limit: limitReportDetail, reportId}}),
    {
      onSuccess: ({data}) => {
        dispatch(reportDetailModel.actions.addReportDetails({
          data: data.data,
          count: data.count
        }))
      },
      enabled: false,
      refetchOnWindowFocus: false,
      retry: false
    }
  )

export const ExportReport = async (id: number) => {
  // Its important to set the 'Content-Type': 'blob' and responseType:'arraybuffer'.
  const headers = {'Content-Type': 'blob'}
  const config: AxiosRequestConfig = {method: 'GET', url: `report/export/${id}`, responseType: 'arraybuffer', headers}

  try {
    const response = await axios(config)

    const outputFilename = `${Date.now()}.xlsx`

    // If you want to download file automatically using link attribute.
    const url = URL.createObjectURL(new Blob([response.data]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', outputFilename)
    document.body.appendChild(link)
    link.click()
    link.remove()
  } catch (error) {
    console.error(error)
  }
}

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