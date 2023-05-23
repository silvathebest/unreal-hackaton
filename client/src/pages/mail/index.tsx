import React from 'react'
import {Sidebar} from 'widgets'
import styles from './styles.module.scss'

const Mail = () => {
  return (
    <div className={styles.root}>
      <Sidebar />
      Почта
    </div>
  )
}

export default Mail