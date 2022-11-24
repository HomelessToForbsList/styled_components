

import React from 'react'
import Typography from '../Typography/Typography'
import { BadgeProps } from './Badge.types'
import styles from './Badge.module.scss'

const Badge: React.FC<BadgeProps> = ({color, text}) => {
  return (
    <div className={styles['badge-container']+' '+styles[`${color}`]}>
      <Typography variant='caption' >{text}</Typography>
    </div>
  )
}

export default Badge