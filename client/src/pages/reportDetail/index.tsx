import {Progress} from '@ant-design/charts'
import React from 'react'
import {DonutPie} from 'features'
import {Sidebar} from 'widgets'
import styles from './styles.module.scss'
import {ReportDetailTable} from './ui/reportDetailTable'

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
        <div className={styles.test2}>
          <div>
            <div>Соответствует</div>
            <DemoProgress />
            <div>%12</div>
          </div>
          <div>
            <div>Доп. назначения</div>
            <DemoProgress />
            <div>%12</div>
          </div>
          <div>
            <div>Частично</div>
            <DemoProgress />
            <div>%12</div>
          </div>
        </div>
        <ReportDetailTable />
      </div>
    </div>
  )
}

const DemoProgress = () => {
  const config = {
    autoFit: false,
    // padding: -10,
    height: 10,
    percent: 0.7,
    appendPadding: 0,
    color: ['#5B8FF9', '#E8EDF3'],
  }

  return <Progress {...config} />
}

export default ReportDetail