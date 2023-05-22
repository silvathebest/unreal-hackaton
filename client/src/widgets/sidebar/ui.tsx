import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {ReactSVG} from 'react-svg'
import {DownloadReport} from 'features/downloadReport'
import {Button} from 'shared/overrideMui'
import {SidebarItem, sidebarList} from './config'
import medpapkaIcon from './img/medpapka.svg'
import styles from './styles.module.scss'

export const Sidebar = () => {
  const [isDownloadReportOpen, setIsDownloadReportOpen] = useState(false)

  return (
    <div className={styles.sidebar}>
      <div>
        <div className={styles.header}>
          <ReactSVG src={medpapkaIcon} /> Медпапка
        </div>

        <div className={styles.links}>
          {sidebarList().map(({to, label, icon, key, notice}: SidebarItem) =>
            <NavLink
              key={key}
              to={to}
              className={({isActive}) => (isActive ? `${styles.active} ` : '') + styles.link}
            >
              <div className={styles.title}>
                <div className={styles.iconWrapper}>
                  <div><ReactSVG src={icon} className={styles.icon} /></div>
                </div>
                <div className={styles.label}>
                  {label}
                </div>
              </div>

              {notice ? <div>{notice}</div> : null}
            </NavLink>
          )}
        </div>
      </div>


      <div className={styles.bottom}>
        <Button variant='contained' onClick={() => setIsDownloadReportOpen(true)}>
          Загрузить отчет
        </Button>

        <DownloadReport isOpen={isDownloadReportOpen} onClose={() => setIsDownloadReportOpen(false)} />
      </div>
    </div>
  )
}
