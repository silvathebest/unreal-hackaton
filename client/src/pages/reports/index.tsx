import React, {FC, useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {ReactSVG} from 'react-svg'
import {Report, ReportGetAll, useGetAllReports} from 'entities/report'
import {DownloadReport, PageHeader} from 'features'
import {useDebounce} from 'shared/hooks'
import {getValueFromObject} from 'shared/lib'
import {Button} from 'shared/overrideMui'
import {Sidebar} from 'widgets'
import countIcon from './icon/count.svg'
import filtersIcon from './icon/filters.svg'
import ordersIcon from './icon/orders.svg'
import searchIcon from './icon/search.svg'
import statusIcon from './icon/status.svg'
import styles from './styles.module.scss'

const Reports = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')
  const filter = useDebounce(inputValue)

  const {refetch} = ReportGetAll(filter, dispatch)
  const reports = useGetAllReports()

  const [isDownloadReportOpen, setIsDownloadReportOpen] = useState(false)

  useEffect(() => {
    refetch()
  }, [refetch, filter])

  return (
    <div className={styles.root}>
      <Sidebar />

      <div className={styles.workAreaWrapper}>
        <PageHeader>Отчёты</PageHeader>

        <div className={styles.workArea}>
          <div className={styles.filters}>
            <div className={styles.filtersLeft}>
              <div className={styles.search}>
                <ReactSVG src={searchIcon} className={styles.icon} />
                <input
                  type='text'
                  className={styles.searchInput}
                  placeholder='Поиск'
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)}
                />
              </div>

              <div className={styles.button}>
                <ReactSVG src={filtersIcon} className={styles.icon} /> Фильтры
              </div>

              <div className={styles.button}>
                <ReactSVG src={ordersIcon} className={styles.icon} />Сортировка
              </div>
            </div>

            <Button className={styles.button2} variant='contained' onClick={() => setIsDownloadReportOpen(true)}>
              Загрузить отчет
            </Button>

            <DownloadReport isOpen={isDownloadReportOpen} onClose={() => setIsDownloadReportOpen(false)} />
          </div>

          <div className={styles.cardWrapper}>
            {reports.map((report) => <Card report={report} key={report.id} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

type CardProps = {
  report: Report
}

type ReportStatusKey = 'ready' | 'print' | 'check'

export type ReportStatusType = {
  id: number
  title: string
}

const ReportStatus: Record<ReportStatusKey, ReportStatusType> = {
  check: {
    id: 1,
    title: 'Готов'
  },
  ready: {
    id: 2,
    title: 'Проверить'
  },
  print: {
    id: 3,
    title: 'Печать'
  }
}

const Card: FC<CardProps> = ({report}) => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>{report.name}</div>
      <div className={styles.wrapper}>
        <div className={styles.count}>
          <ReactSVG src={countIcon} className={styles.icon} />
          {report.count} записей
        </div>
        <div className={styles.status}>
          <ReactSVG src={statusIcon} className={styles.icon} />
          <div className={styles[`status${report.status || 1}`]}>{getValueFromObject(ReportStatus, report.status || 1).title}</div>
        </div>
      </div>
      <div className={styles.date}>
        {report.createdAt}
      </div>
    </div>
  )
}

export default Reports