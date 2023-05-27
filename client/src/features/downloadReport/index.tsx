import {Delete20Regular} from '@fluentui/react-icons'
import {Modal} from '@mui/material'
import React, {ChangeEvent, FC, FormEvent, useCallback, useEffect, useRef, useState} from 'react'
import {CheckReportStatus, UploadReport} from 'entities/report'
import {LoadingButton} from '../loadingButton'
import xlsxImg from './img/xlsx.png'
import styles from './styles.module.scss'

type DownloadReportProps = {
  isOpen: boolean
  onClose: () => void
}

export const DownloadReport: FC<DownloadReportProps> = ({isOpen, onClose}) => {
  const inputFileRef = useRef<HTMLInputElement | null>(null)
  const [file, setFile] = useState<File | null>(null)
  const [title, setTitle] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [reportId, setReportId] = useState<number | null>(null)

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const files = e.target.files
    if (!files || !files[0]) return

    setFile(files[0])

    e.target.value = ''
  }

  const onSelectFileHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!file) return inputFileRef.current?.click()

    const formData = new FormData()
    formData.append('report', file)
    formData.append('name', title)
    formData.append('icon', '❤️')
    setIsLoading(true)
    UploadReport(formData)
      .then(({data}) => setReportId(data.reportId))
      .catch((e) => {
        console.error(e)
        setIsLoading(false)
      })
  }

  const stopLoading = useCallback((interval: number) => {
    setIsLoading(false)
    clearInterval(interval)
  }, [])

  const onSuccess = useCallback(
    () => {
      setFile(null)
      setTitle('')
      setReportId(null)
    }, []
  )


  useEffect(() => {
    if (!isLoading || !reportId) return

    const interval = window.setInterval(() => {
      CheckReportStatus(reportId)
        .then((status) => {
          if (status) {
            stopLoading(interval)
            onClose()
            onSuccess()
          }
        })
        .catch(() => stopLoading(interval))
    }, 1000)
  }, [isLoading, reportId])


  return (
    <>
      <Modal
        open={isOpen}
        onClose={onClose}
      >
        <form onSubmit={onSelectFileHandler}>
          <div className={styles.container}>
            <input
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type='text'
              className={styles.reportTitle}
              placeholder='Название отчета'
            />

            {
              file
                ? <div className={styles.fileInfoWrapper}>
                  <div className={styles.fileInfo}>
                    <img src={xlsxImg} alt='xlsx' className={styles.xlsx} />
                    <div className={styles.text}>
                      <div>{file.name}</div>
                      <div>({(file.size / 1024 / 1024).toFixed(3)}) MB</div>
                    </div>
                  </div>
                  <div className={styles.deleteIcon}>
                    <Delete20Regular onClick={() => setFile(null)} />
                  </div>
                </div>
                : null
            }

            <LoadingButton type='submit' variant='contained' isLoading={isLoading}>
              {file ? 'Загрузить' : 'Выбрать файл'}
            </LoadingButton>
          </div>
        </form>
      </Modal>

      <input
        ref={inputFileRef}
        type='file'
        required
        accept='application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        onChange={onChangeFile}
        className={styles.file}
      />
    </>
  )
}
