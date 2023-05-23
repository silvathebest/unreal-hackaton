import React from 'react'
import {Sidebar} from 'widgets'
import styles from './styles.module.scss'

const Notes = () => {
  return (
    <div className={styles.root}>
      <Sidebar />
      Заметки
    </div>
  )
}

export default Notes