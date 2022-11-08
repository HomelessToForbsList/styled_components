import React from 'react'
import { PasswordProps } from './Password.types'
import IconComponent from '../../Icon/IconComponent'
import Eye from '../../Icon/Icons/Eye'

  const Password:React.FC<PasswordProps> = (props) => {
  return (
    <IconComponent onClick={props.onClick}>
      <Eye/>
    </IconComponent>
  )
}

export default Password