import {Delete20Regular} from '@fluentui/react-icons'
import {Modal} from '@mui/material'
import React, {ChangeEvent, FC, FormEvent, useRef, useState} from 'react'
import {UploadReport} from 'entities/report'
import {Button} from 'shared/overrideMui'
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
    UploadReport(formData).then(() => {
      //TODO add interval checking
      onClose()
    }).catch(console.error)
  }

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

            <Button type='submit' variant='contained'>
              {file ? 'Загрузить' : 'Выбрать файл'}
            </Button>
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
