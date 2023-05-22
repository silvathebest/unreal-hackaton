import React from 'react'
import {Sidebar} from 'widgets'
import styles from './styles.module.scss'

const Reports = () => {
  return (
    <div className={styles.root}>
      <Sidebar />
      Отчёты
    </div>
  )
}

export default Reports