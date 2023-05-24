import {Menu as MuiMenu, MenuProps as MuiMenuProps} from '@mui/material'
import {FC} from 'react'
import './styles.scss'

export const Menu: FC<MuiMenuProps> = ({
  children,
  classes,
  ...rest
}) => {
  return (
    <MuiMenu
      classes={{root: 'override-mui-menu'}}
      {...rest}
    >
      {children}
    </MuiMenu>
  )
}
