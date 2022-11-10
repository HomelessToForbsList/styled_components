
import React from 'react'
import { RadioButtonProps } from './RadioButton.types'
import styles from './RadioButton.module.scss'

const RadioButton:React.FC<RadioButtonProps> = (props) => {

  const id = React.useId()

  return (
    <>
      <input
      type="radio"
      name={props.name}
      id={'radio-'+id}
      defaultChecked={props.defaultChecked}
      value={props.value}
      onChange={e => props?.onChange(e)}
      className={styles['radio-button']}/>
      {props.children && <label htmlFor={'radio-'+id}>{props.children}</label>}
    </>
  )
}

export default RadioButton