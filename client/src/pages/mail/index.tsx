import React from 'react'
import {PageHeader} from 'features'
import {Sidebar} from 'widgets'
import styles from './styles.module.scss'

const Mail = () => {
  return (
    <div className={styles.root}>
      <Sidebar />
      <div className={styles.workArea}>
        <PageHeader>Почта</PageHeader>
      </div>
    </div>
  )
}

export default Mail