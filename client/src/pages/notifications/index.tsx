import React from 'react'
import {Sidebar} from 'widgets'
import styles from './styles.module.scss'

const Notifications = () => {
  return (
    <div className={styles.root}>
      <Sidebar />
      Уведомления
    </div>
  )
}

export default Notifications