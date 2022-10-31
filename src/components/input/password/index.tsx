import React from 'react'
import styles from './style.module.scss'
import { PasswordProps } from '../types'

  const Password:React.FC<PasswordProps> = (props) => {
  return (
    <div className={styles.password} onClick={props.onClick}>
      <img src='/img/Show-hide.svg' width={'20px'} alt='icon-password'></img>
    </div>
  )
}

export default Password