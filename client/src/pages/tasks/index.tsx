import React from 'react'
import {PageHeader} from 'features'
import {Sidebar} from 'widgets'
import styles from './styles.module.scss'

const Tasks = () => {
  return (
    <div className={styles.root}>
      <Sidebar />
      <div className={styles.workArea}>
        <PageHeader>Задачи</PageHeader>
      </div>
    </div>
  )
}

export default Tasks