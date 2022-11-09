import React from 'react'
import styles from './Toggle.module.scss'
import { ToggleProps } from './Toggle.types'

const Toggle: React.FC<ToggleProps> = ({checked, onChange, labelText}) => {

  const id = React.useId()

  return (
    <div>
      <input type="checkbox" id={`switch-${id}`} checked={checked} className={styles.switch} onChange={onChange}/>
      <label htmlFor={`switch-${id}`} className={styles.label}>{labelText}</label>
    </div>
  )
}

export default Toggle