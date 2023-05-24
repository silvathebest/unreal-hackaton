import axios, {AxiosResponse} from 'axios'

export const UploadReport = (formData: FormData): Promise<AxiosResponse<string, null>> =>
  axios.post('/upload/report', formData)
