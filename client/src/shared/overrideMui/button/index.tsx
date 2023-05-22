import {Button as MuiButton, ButtonProps as MuiButtonProps} from '@mui/material'
import {FC} from 'react'
import './styles.scss'

export const Button: FC<MuiButtonProps> = ({
  children,
  classes,
  ...rest
}) => {
  return (
    <MuiButton
      classes={{root: 'override-mui-button'}}
      {...rest}
    >
      {children}
    </MuiButton>
  )
}
