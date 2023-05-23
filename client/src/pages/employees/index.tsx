import React from 'react'
import {Sidebar} from 'widgets'
import styles from './styles.module.scss'

const Employees = () => {
  return (
    <div className={styles.root}>
      <Sidebar />
      Сотрудники
    </div>
  )
}

export default Employees