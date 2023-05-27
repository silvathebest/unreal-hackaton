import {ButtonProps as MuiButtonProps} from '@mui/material/Button/Button'
import React from 'react'
import {Button, Loader} from 'shared/overrideMui'
import styles from './styles.module.scss'

type LoadingButtonProps = MuiButtonProps & {
  isLoading?: boolean,
  disabled?: boolean
}

export const LoadingButton: React.FC<LoadingButtonProps> = ({children, isLoading, disabled, className, ...rest}) => {
  return (
    <Button disabled={isLoading || disabled} {...rest}>
      {children}
      {isLoading ? <Loader className={styles.loader} /> : null}
    </Button>
  )
}