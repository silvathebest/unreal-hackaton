import {TextField as MuiTextField, TextFieldProps as MuiTextFieldProps} from '@mui/material'
import {FC} from 'react'
import './styles.scss'

export const TextField: FC<MuiTextFieldProps> = ({
  children,
  classes,
  ...rest
}) => {
  return (
    <MuiTextField
      classes={{root: 'override-mui-textField'}}
      {...rest}
    >
      {children}
    </MuiTextField>
  )
}
