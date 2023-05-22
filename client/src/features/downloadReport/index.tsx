import {Delete20Regular} from '@fluentui/react-icons'
import {Modal} from '@mui/material'
import React, {ChangeEvent, FC, useRef, useState} from 'react'
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

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (!(e.target.files && e.target.files[0])) return
    const file = e.target.files[0]
    setFile(file)
    e.target.value = ''
  }

  const onSelectFileHandler = () => {
    if (file) {
      // TODO: Загрузка файла на сервер
      return
    }

    inputFileRef.current?.click()
  }

  console.log(file)

  return (
    <>
      <Modal
        open={isOpen}
        onClose={onClose}
      >
        <div className={styles.container}>
          <input type='text' className={styles.reportTitle} placeholder='Название отчета' />

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

          <Button variant='contained' onClick={onSelectFileHandler}>
            {file ? 'Загрузить' : 'Выбрать файл'}
          </Button>
        </div>
      </Modal>

      <input
        ref={inputFileRef}
        type='file'
        accept='.xlsx'
        onChange={onChangeFile}
        className={styles.file}
      />
    </>
  )
}
