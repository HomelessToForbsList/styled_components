import React from 'react'
import styles from './Checkbox.style.module.scss'
import { OptionProps, CheckboxProps } from './Checkbox.types'

const Option: React.FC<OptionProps> = (props) =>{

  const id = React.useId()

  return(
    <li className={styles.option}>
      <input type='checkbox' id={`${props.value}`+id} name={`${props.value}`+id} value={props.value} onChange={props.onChange}/>
      <label htmlFor={`${props.value}`+id}> {props.value} </label>
    </li>
  )
}

const Checkbox: React.FC<CheckboxProps> = (props) => {

  return (
    <ul className={styles.wrapper}>
      {props.options.map(el => <Option key={el} value={el} onChange={props.onChange}/>)}
    </ul>
  )
}

export default Checkbox