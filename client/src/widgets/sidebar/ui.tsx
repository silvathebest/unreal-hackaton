import {
  Divider, ListItemText,
  MenuItem
} from '@mui/material'
import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {ReactSVG} from 'react-svg'
import {clearUser, getLogin} from 'entities/user'
import {DownloadReport} from 'features/downloadReport'
import {Button} from 'shared/overrideMui'
import {Menu} from 'shared/overrideMui/menu'
import {SidebarItem, sidebarList, RecentlyAddedItem, recentlyAddedItems} from './config'
import exitIcon from './img/exit.svg'
import medfolderIcon from './img/medfolder.svg'
import medfolderBlueIcon from './img/medfolderblue.svg'
import medfolderRedIcon from './img/medfolderred.svg'
import revealIcon from './img/reveal.svg'
import settingsIcon from './img/settings.svg'
import showRecentlyButton from './img/showRecentlyButton.svg'
import sunIcon from './img/sun.svg'
import styles from './styles.module.scss'

export const Sidebar = () => {
  const [isDownloadReportOpen, setIsDownloadReportOpen] = useState(false)
  const [isShowRecentlyAdded, setShowRecentlyAdded] = useState(true)
  const [menu, setMenu] = React.useState<null | HTMLElement>(null)
  const dispatch = useDispatch()
  const handleClose = () => setMenu(null)
  const logOut = () => {
    dispatch(clearUser())
  }

  const createIcon = (name: String) => {
    return (<div className={styles.customIcon}>{name[0]}</div>)
  }

  return (
    <>
      <div className={styles.sidebar}>
        <div>
          <div className={styles.header}
            id='menu-button' onClick={(event: React.MouseEvent<HTMLDivElement>) => setMenu(event.currentTarget)}
            aria-controls={Boolean(menu) ? 'menu' : undefined}
            aria-haspopup='true'
            aria-expanded={Boolean(menu) ? 'true' : undefined}
          >
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

      <Menu id='menu' anchorEl={menu} open={Boolean(menu)} MenuListProps={{
        'aria-labelledby': 'menu-button',
      }} onClose={handleClose}>
        <div className='menu-header'>{getLogin()}</div>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ReactSVG className='menu-icon' src={medfolderRedIcon} />
          <ListItemText>Учреждение</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ReactSVG className='menu-icon' src={medfolderBlueIcon} />
          <ListItemText>Отделение</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ReactSVG className='menu-icon-20' src={settingsIcon} />
          <ListItemText>Настройки</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ReactSVG className='menu-icon-20' src={sunIcon} />
          <ListItemText>Темный режим</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ReactSVG className='menu-icon-20' src={exitIcon} />
          <ListItemText onClick={logOut}>Выход</ListItemText>
        </MenuItem>
      </Menu>
    </>
  )
}
