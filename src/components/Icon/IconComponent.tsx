import React from 'react'
import { IconProps } from './IconComponent.types'

const IconComponent: React.FC<IconProps> = ({children, ...props}) => {

  return (
    <div className={props.className} onClick={props.onClick}>
      {children}
    </div>
  )
}

export default IconComponent
