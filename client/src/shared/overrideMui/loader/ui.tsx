import {CircularProgress, CircularProgressProps} from '@mui/material'
import React from 'react'
import './styles.scss'

type OverrideCircularProgress ={
  innerColor?: string
}

export const Loader: React.FC<CircularProgressProps & OverrideCircularProgress> = ({
  className,
  innerColor
}) => {
  return (
    <span className={`override-circularProgress ${className || ''}`}>
      <CircularProgress
        classes={{root: 'override-circularProgressActive-root'}}
        size={20}
        style={{color: innerColor}}
      />
      <CircularProgress
        classes={{root: 'override-circularProgressInactive-root'}}
        variant='determinate'
        size={20}
        thickness={3}
        value={100}
      />
    </span>
  )
}
