import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'
import {Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography} from '@mui/material'
import {useEffect, useState} from 'react'
// import colorConfigs from '../../configs/colorConfigs'
import {RouteType} from '../routeTypeConfig'
import stylesConfig from '../stylesConfig'
import SidebarItem from './SidebarItem'
// import {useSelector} from 'react-redux'
// import {RootState} from '../../redux/store'

type Props = {
  item: RouteType;
};

const SidebarItemCollapse = ({item}: Props) => {
  const [open, setOpen] = useState(false)

  // const {appState} = useSelector((state: RootState) => state.appState)

  // useEffect(() => {
  //   if (appState.includes(item.state)) {
  //     setOpen(true)
  //   }
  // }, [appState, item])

  return (
    item.sidebarProps ? (
      <>
        <ListItemButton
          onClick={() => setOpen(!open)}
          sx={stylesConfig.listItemButton}
        >
          <ListItemIcon sx={stylesConfig.listItemIcon}>
            {item.sidebarProps.icon}
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={
              <Typography sx={stylesConfig.typograpfy}>
                {item.sidebarProps.displayText}
              </Typography>
            }
          />
          {open ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
        </ListItemButton>
        <Collapse in={open} timeout='auto'>
          <List>
            {item.child?.map((route, index) => (
              route.sidebarProps ? (
                route.child ? (
                  <SidebarItemCollapse item={route} key={index} />
                ) : (
                  <SidebarItem item={route} key={index} />
                )
              ) : null
            ))}
          </List>
        </Collapse>
      </>
    ) : null
  )
}

export default SidebarItemCollapse