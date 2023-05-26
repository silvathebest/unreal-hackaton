import {Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material'
import React from 'react'
import {TableContainer} from 'shared/overrideMui'
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
            <TableCell>Пол&nbsp;пациента</TableCell>
            <TableCell>Д.Р.&nbsp;пациента</TableCell>
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
                1
              </TableCell>
              <TableCell>
                2
              </TableCell>
              <TableCell>
                3
              </TableCell>
              <TableCell>
                <div className={styles.position}>
                  4
                </div>
              </TableCell>
              <TableCell>
                5
              </TableCell>
              <TableCell>
                6
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