import React from 'react'
import {PageHeader} from 'features'
import {Sidebar} from 'widgets'
import styles from './styles.module.scss'

const Notes = () => {
  return (
    <div className={styles.root}>
      <Sidebar />
      <div className={styles.workArea}>
        <PageHeader>Заметки</PageHeader>
      </div>
    </div>
  )
}

export default Notes