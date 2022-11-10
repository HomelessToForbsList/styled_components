import React from 'react'
import styles from './Toggle.module.scss'
import { ToggleProps } from './Toggle.types'

const Toggle: React.FC<ToggleProps> = (props) => {

  const id = React.useId()

  return (
    <>
      <input
      type="checkbox"
      id={'toggle-'+id}
      defaultChecked={props.defaultChecked}
      className={styles.switch}
      value={props.value}
      onChange={props.onChange}/>
      {props.children && <label htmlFor={'toggle-'+id} className={styles.label}>{props.children}</label>}
    </>
  )
}

export default Toggle