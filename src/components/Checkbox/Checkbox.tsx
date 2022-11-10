import React from 'react'
import styles from './Checkbox.module.scss'
import { CheckboxProps } from './Checkbox.types'

const Checkbox: React.FC<CheckboxProps> = (props) =>{

  const id = React.useId()

  return(
    <>
      <input
      type='checkbox'
      id={'checkbox-'+id}
      defaultChecked={props.defaultChecked}
      className={styles.checkbox}
      name={'checkbox-'+id}
      value={props.value}
      onChange={props.onChange}/>
      {props.children && <label htmlFor={'checkbox-'+id}>{props.children}</label>}
    </>
  )
}

export default Checkbox