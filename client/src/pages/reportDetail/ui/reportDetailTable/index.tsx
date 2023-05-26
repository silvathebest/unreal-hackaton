import {Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material'
import moment from 'moment/moment'
import React from 'react'
import {ReactSVG} from 'react-svg'
import {TableContainer} from 'shared/overrideMui'
import clientDateBirthIcon from './icon/clientDateBirth.svg'
import clientIdIcon from './icon/clientId.svg'
import diagnosisIcon from './icon/diagnosis.svg'
import genderIcon from './icon/gender.svg'
import idMKBIcon from './icon/idMKB.svg'
import positionIcon from './icon/position.svg'
import styles from './styles.module.scss'

const list = [
  {
    id: 1,
    gender: 'Муж',
    clientDateBirth: '1984-12-12 20:00:00+00',
    clientId: 1,
    idMKB: 'J32.9',
    diagnosis: 'ринит',
    serviceDate: '1984-12-12 20:00:00+00',
    position: 'врач-кардиолог',
    standard: 1,
    appointments: 'sdaasdasdasd'
  },
  {
    id: 2,
    gender: 'Жен',
    clientDateBirth: '1983-12-10 20:00:00+00',
    clientId: 2,
    idMKB: 'J32.9',
    diagnosis: 'ринит',
    position: 'врач-оториноларинголог',
    standard: 2,
    appointments: 'sdaasdasdasd'
  },
  {
    id: 3,
    gender: 'Жен',
    clientDateBirth: '1983-12-10 20:00:00+00',
    clientId: 3,
    idMKB: 'J32.9',
    diagnosis: 'ринит',
    position: 'врач-невролог',
    standard: 3,
    appointments: 'sdaasdasdasd'
  },
]

export const ReportDetailTable = () => {
  return (
    <TableContainer>
      <Table>
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
          {list.map((item) => (
            <TableRow key={item.id} className={styles.row}>
              <TableCell>
                {item.gender}
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
  )
}