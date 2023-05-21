import {
  Avatar, Drawer, List, Stack,
  Toolbar, Divider, FormControl,
  InputAdornment, InputLabel, OutlinedInput
} from '@mui/material'
import React from 'react'
import SidebarItem from './components/SidebarItem'
import logo from './img/logo.svg'
import appRoutes from './routes/appRoutes'
import styles from './styles.module.scss'

const Sidebar = () => {
  return (
    <Drawer
      variant='permanent'
      sx={{
        width: 292,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 292,
          boxSizing: 'border-box',
          borderRight: '0px',
          backgroundColor: 'rgba(0, 0, 0, 0.01)',
          color: '#000'
        }
      }}
    >

      <List disablePadding>

        <Toolbar className={styles.toolbar} sx={{marginBottom: '4px'}}>
          <Stack
            sx={{width: '100%', alignItems: 'center'}}
            direction='row'
          >
            <Avatar className={styles.logo} sx={{borderRadius: '8px'}} src={logo} />
            <h2 className={styles.header}>Meдпапка</h2>
          </Stack>
        </Toolbar>

        <Divider />

        {appRoutes.map((route, index) => (
          route.sidebarProps ? (
            route.child ? (null
            // <SidebarItemCollapse item={route} key={index} />
            ) : (
              <SidebarItem item={route} key={index} />
            )
          ) : null
        ))}

      </List>

    </Drawer>
  )
}

export default Sidebar