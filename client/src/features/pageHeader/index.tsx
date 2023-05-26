import React, {FC, ReactNode} from 'react'
import {ReactSVG} from 'react-svg'
import noteSvg from './icon/note.svg'
import styles from './styles.module.scss'

type PageHeaderProps = {
  children: ReactNode
}

export const PageHeader: FC<PageHeaderProps> = ({children}) => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>{children}</div>

      <ReactSVG src={noteSvg} className={styles.noteIcon} />
    </div>
  )
}