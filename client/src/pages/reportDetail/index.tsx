import React from 'react'
import {DonutPie} from 'features'
import {Sidebar} from 'widgets'
import styles from './styles.module.scss'

const data = [
  {
    type: 'Соответствует',
    value: 27,
  },
  {
    type: 'Доп. назначения',
    value: 25,
  },
  {
    type: 'Частично',
    value: 18,
  },
]

const ReportDetail = () => {
  return (
    <div className={styles.root}>
      <Sidebar />

      <div className={styles.workArea}>
        <div className={styles.test}>
          <DonutPie data={data} />
        </div>
      </div>
    </div>
  )
}

export default ReportDetail