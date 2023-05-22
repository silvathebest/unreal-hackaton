import React from 'react'
import {Sidebar} from 'widgets'
import styles from './styles.module.scss'

const Tasks = () => {
  return (
    <div className={styles.root}>
      <Sidebar />
      Задачи
    </div>
  )
}

export default Tasks