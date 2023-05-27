import axios, {AxiosResponse} from 'axios'

export const UploadReport = (formData: FormData): Promise<AxiosResponse<{reportId: number}, null>> =>
  axios.post('/upload/report', formData)

export const CheckReportStatus = (reportId: number): Promise<AxiosResponse<{status: boolean}, null>> =>
  axios.get(`upload/report`, {params: {id: reportId}})