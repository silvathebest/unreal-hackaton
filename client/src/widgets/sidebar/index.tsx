import {
  Avatar, Drawer, List, Stack,
  Toolbar, Divider, Box
} from '@mui/material'
import React from 'react'
import SidebarItem from './components/SidebarItem'
import SidebarItemCollapse from './components/SidebarItemCollapse'
import logo from './img/logo.svg'
import appRoutes from './routes/appRoutes'
import styles from './styles.module.scss'
import stylesConfig from './stylesConfig'

const Sidebar = () => {

  return (
    <Drawer
      variant='permanent'
      sx={stylesConfig.drawer}
    >
      <List disablePadding>
        <Toolbar sx={stylesConfig.toolbar}>
          <Stack
            sx={stylesConfig.stack}
            direction='row'
          >
            <Avatar sx={stylesConfig.avatar} src={logo} />
            <h2 className={styles.header}>Meдпапка</h2>
          </Stack>
        </Toolbar>
        <Divider />
        <Box sx={stylesConfig.box}>
          {appRoutes.map((route, index) => (
            route.sidebarProps ? (
              route.child ? (
                <SidebarItemCollapse item={route} key={index} />
              ) : (
                <SidebarItem item={route} key={index} />
              )
            ) : null
          ))}
        </Box>

      </List>
    </Drawer>
  )
}

export default Sidebar