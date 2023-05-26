import {Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material'
import moment from 'moment/moment'
import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {useParams} from 'react-router'
import {ReactSVG} from 'react-svg'
import {GetReportDetail, useGetReportDetailsData} from 'entities/reportDetail'
import {useDebounce} from 'shared/hooks'
import {Button, TableContainer} from 'shared/overrideMui'
import clientDateBirthIcon from './icon/clientDateBirth.svg'
import clientIdIcon from './icon/clientId.svg'
import diagnosisIcon from './icon/diagnosis.svg'
import filtersIcon from './icon/filters.svg'
import genderIcon from './icon/gender.svg'
import idMKBIcon from './icon/idMKB.svg'
import positionIcon from './icon/position.svg'
import searchIcon from './icon/search.svg'
import styles from './styles.module.scss'

export const ReportDetailTable = () => {
  const dispatch = useDispatch()
  const {id} = useParams()

  const [page, setPage] = useState(1)
  const [inputValue, setInputValue] = useState('')
  const filter = useDebounce(inputValue)

  const {refetch} = GetReportDetail({filter, reportId: Number(id), page}, dispatch)
  const reportDetails = useGetReportDetailsData()

  useEffect(() => {
    refetch()
  }, [refetch, page, filter])

  return (
    <>
      <div className={styles.filters}>
        <div className={styles.filtersLeft}>
          <div className={styles.search}>
            <ReactSVG src={searchIcon} className={styles.icon} />
            <input
              type='text'
              className={styles.searchInput}
              placeholder='Поиск'
              value={inputValue}
              onChange={(event) => {
                setInputValue(event.target.value)
                setPage(1)
              }}
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
              <TableCell>ИД&nbsp;пациента</TableCell>
              <TableCell>Код&nbsp;МКБ-10</TableCell>
              <TableCell>Должность</TableCell>
              <TableCell>Дата&nbsp;оказания&nbsp;услуги</TableCell>
              <TableCell>Стандарт</TableCell>
              <TableCell>Диагноз</TableCell>
              <TableCell>Назначение</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reportDetails.map((item) => (
              <TableRow key={item.id} className={styles.row}>
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
                  {moment(item.serviceDate).format('DD.MM.YYYY') + ' в ' + moment(item.serviceDate).format('hh.mm')}
                </TableCell>
                <TableCell>
                  7
                </TableCell>
                <TableCell>
                  8
                </TableCell>
                <TableCell>
                  9
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={styles.paginate}>
        <div onClick={() => setPage(1)}>1</div>
        <div onClick={() => setPage(2)}>2</div>
        <div onClick={() => setPage(3)}>3</div>
        <div onClick={() => setPage(4)}>4</div>
        <div onClick={() => setPage(5)}>5</div>
      </div>
    </>
  )
}