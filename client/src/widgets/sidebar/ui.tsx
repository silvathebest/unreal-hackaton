import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {ReactSVG} from 'react-svg'
import {DownloadReport} from 'features/downloadReport'
import {Button} from 'shared/overrideMui'
import {SidebarItem, sidebarList, RecentlyAddedItem, recentlyAddedItems} from './config'
import medfolderIcon from './img/medfolder.svg'
import revealIcon from './img/reveal.svg'
import showRecentlyButton from './img/showRecentlyButton.svg'
import styles from './styles.module.scss'

export const Sidebar = () => {
  const [isDownloadReportOpen, setIsDownloadReportOpen] = useState(false)
  const [isShowRecentlyAdded, setShowRecentlyAdded] = useState(true)

  const createIcon = (name: String) => {
    return (<div className={styles.customIcon}>{name[0]}</div>)
  }

  return (
    <div className={styles.sidebar}>
      <div>
        <div className={styles.header}>
          <ReactSVG className={styles.folderIcon} src={medfolderIcon} />
          Медпапка
          <ReactSVG className={styles.revealIcon} src={revealIcon} />
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

              {notice ? <div className={styles.notice}>{notice}</div> : null}
            </NavLink>
          )}

          {/*TODO:Доработать подсвечивание активной вкладки*/}
          <div className={styles.recentlyAdded}>
            <div className={styles.recentlyAddedTitle} onClick={() => setShowRecentlyAdded(!isShowRecentlyAdded)}>
              <div><ReactSVG src={showRecentlyButton} className={styles.icon} /></div>
              Недавно добавленные
            </div>
            <div className={isShowRecentlyAdded ? '' : styles.hidden}>
              {recentlyAddedItems.map(({key, name, to, icon}: RecentlyAddedItem) =>
                <NavLink
                  key={key}
                  to={to}
                  className={
                    ({isActive}) => (isActive ? `${styles.active} ` : '') + styles.link
                  }
                >
                  <div className={styles.title}>
                    <div className={styles.iconWrapper}>
                      { icon ? <div><ReactSVG src={icon} className={styles.icon} /></div> : createIcon(name)}
                    </div>
                    <div className={styles.label}>
                      {name}
                    </div>
                  </div>
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <Button className={styles.button} variant='contained' onClick={() => setIsDownloadReportOpen(true)}>
          Загрузить отчет
        </Button>

        <DownloadReport isOpen={isDownloadReportOpen} onClose={() => setIsDownloadReportOpen(false)} />
      </div>
    </div>
  )
}
