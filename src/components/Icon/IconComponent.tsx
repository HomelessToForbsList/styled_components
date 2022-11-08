import React from 'react'
import styles from './IconComponent.module.scss'
import { IconProps } from './IconComponent.types'

const IconComponent: React.FC<IconProps> = ({children, ...props}) => {

  return (
    <div className={styles['icon-container']} onClick={props.onClick}>
      {children}
    </div>
  )
}

export default IconComponent
