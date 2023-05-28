import {Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material'
import moment from 'moment/moment'
import React, {useCallback, useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {useParams} from 'react-router'
import {ReactSVG} from 'react-svg'
import {GetReportDetail, useGetReportDetailsCountPage, useGetReportDetailsData} from 'entities/reportDetail'
import {useDebounce} from 'shared/hooks'
import {TableContainer} from 'shared/overrideMui'
import appointmentIcon from './icon/appointment.svg'
import arrowIcon from './icon/arrow.svg'
import clientDateBirthIcon from './icon/clientDateBirth.svg'
import clientIdIcon from './icon/clientId.svg'
import diagnosisIcon from './icon/diagnosis.svg'
import filtersIcon from './icon/filters.svg'
import genderIcon from './icon/gender.svg'
import idMKBIcon from './icon/idMKB.svg'
import positionIcon from './icon/position.svg'
import searchIcon from './icon/search.svg'
import serviceDateIcon from './icon/serviceDate.svg'
import standardIcon from './icon/standard.svg'
import styles from './styles.module.scss'

export const ReportDetailTable = () => {
  const dispatch = useDispatch()
  const {id} = useParams()

  const [page, setPage] = useState(1)
  const [inputValue, setInputValue] = useState('')
  const filter = useDebounce(inputValue)

  const {refetch} = GetReportDetail({filter, reportId: Number(id), page}, dispatch)
  const reportDetails = useGetReportDetailsData()
  const reportDetailsCountPage = useGetReportDetailsCountPage()

  const initRenderList = (initPage: number): number[] => {
    const initialPages: number[] = []
    for (let i = initPage; i <= reportDetailsCountPage && i <= page + 6; i++) {
      initialPages.push(i)
    }
    return initialPages
  }

  const [currentPagesList, setCurrentPagesList] = useState<number[]>([])

  useEffect(() => {
    refetch()
  }, [refetch, page, filter])

  useEffect(() => {
    currentPagesList.includes(page) && setCurrentPagesList(initRenderList(page))
  }, [page])

  useEffect(() => setCurrentPagesList(initRenderList(page)), [reportDetailsCountPage])

  const renderPaginate = (currentPagesList: number[]) => {
    return (
      <div className={styles.paginate}>
        <div
          className={`${(page === 1 ? `${styles.disabled}` : '')} ${styles.pageCell} ${styles.previousPageButton}`}
          onClick={() => setPage(page - 1)}>
          <ReactSVG src={arrowIcon} className={styles.icon} />
        </div>

        {currentPagesList.map((number) => (
          <div
            className={`${(number === page ? `${styles.active}` : '')} ${styles.pageCell}`}
            key={number}
            onClick={() => setPage(number)}>{number}
          </div>
        )
        )}

        <div
          className={`${(page === reportDetailsCountPage ? `${styles.disabled}` : '')} ${styles.pageCell}`}
          onClick={() => setPage(page + 1)}>
          <ReactSVG src={arrowIcon} className={styles.icon} />
        </div>
      </div>
    )
  }

  const onChangeHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
    setPage(1)
  }, [])

  return (
    <div className={styles.tableWrapper}>
      <div className={styles.filters}>
        <div className={styles.filtersLeft}>
          <div className={styles.search}>
            <ReactSVG src={searchIcon} className={styles.icon} />
            <input
              type='text'
              className={styles.searchInput}
              placeholder='Поиск'
              value={inputValue}
              onChange={onChangeHandler}
            />
          </div>

          <div className={styles.button}>
            <ReactSVG src={filtersIcon} className={styles.icon} /> Фильтры
          </div>
        </div>
      </div>
      <TableContainer>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>
                <div className={styles.headerColumnContainer}>
                  <ReactSVG src={standardIcon} className={styles.icon} />&nbsp;
                  Стандарт
                </div>
              </TableCell>
              <TableCell>
                <div className={styles.headerColumnContainer}>
                  <ReactSVG src={genderIcon} className={styles.icon} />&nbsp;
                  Пол&nbsp;пациента
                </div>
              </TableCell>
              <TableCell>
                <div className={styles.headerColumnContainer}>
                  <ReactSVG src={clientDateBirthIcon} className={styles.icon} />&nbsp;
                  Д.Р.&nbsp;пациента
                </div>

              </TableCell>
              <TableCell>
                <div className={styles.headerColumnContainer}>
                  <ReactSVG src={clientIdIcon} className={styles.icon} />&nbsp;
                  ИД&nbsp;пациента
                </div>
              </TableCell>
              <TableCell>
                <div className={styles.headerColumnContainer}>
                  <ReactSVG src={idMKBIcon} className={styles.icon} />&nbsp;
                  Код&nbsp;МКБ-10
                </div>
              </TableCell>
              <TableCell>
                <div className={styles.headerColumnContainer}>
                  <ReactSVG src={positionIcon} className={styles.icon} />&nbsp;
                  Должность
                </div>
              </TableCell>
              <TableCell>
                <div className={styles.headerColumnContainer}>
                  <ReactSVG src={serviceDateIcon} className={styles.icon} />&nbsp;
                  Дата&nbsp;оказания&nbsp;услуги
                </div>
              </TableCell>
              <TableCell>
                <div className={styles.headerColumnContainer}>
                  <ReactSVG src={diagnosisIcon} className={styles.icon} />&nbsp;
                  Диагноз
                </div>
              </TableCell>
              <TableCell>
                <div className={styles.headerColumnContainer}>
                  <ReactSVG src={appointmentIcon} className={styles.icon} />&nbsp;
                  Назначение
                </div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reportDetails.map((item) => (
              <TableRow key={item.id} className={styles.row}>
                <TableCell>
                  {item.standard === 1
                    ?
                    <div className={styles.standardOne}>Соответствует</div>
                    :
                    (item.standard === 2
                      ?
                      <div className={styles.standardTwo}>Частично</div>
                      :
                      <div className={styles.standardThree}>Доп. назначения</div>
                    )}
                </TableCell>
                <TableCell>
                  {item.gender === 'Муж' ? 'Мужской' : 'Женский'}
                </TableCell>
                <TableCell>
                  {moment(item.clientDateBirth).format('DD.MM.YYYY')}
                </TableCell>
                <TableCell>
                  {item.clientId}
                </TableCell>
                <TableCell>
                  <div className={styles.idMKB}>
                    {item.idMKB}
                  </div>
                </TableCell>
                <TableCell>
                  <div className={styles.position}>
                    {item.position}
                  </div>
                </TableCell>
                <TableCell>
                  {moment(item.serviceDate).format('DD.MM.YYYY') + ' в ' + moment(item.serviceDate).format('hh:mm')}
                </TableCell>
                <TableCell>
                  {item.conformity === 1
                    ?
                    <div className={styles.standardOne}>Соответствует</div>
                    :
                    (item.conformity === 2
                      ?
                      <div className={styles.standardTwo}>Доп. назначения</div>
                      :
                      <div className={styles.standardThree}>Частично</div>
                    )}
                </TableCell>
                <TableCell>
                  <div className={styles.textEllipsis}>
                    {item.diagnosis}
                  </div>
                </TableCell>
                <TableCell>
                  <div className={styles.textEllipsis}>
                    {item.appointments}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {renderPaginate(currentPagesList)}
    </div>
  )
}