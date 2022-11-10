
import React from 'react'
import { ListComponentProps } from './ListComponent.types'
import styles from './ListComponent.module.scss'
import Checkbox from '../Checkbox/Checkbox'
import RadioButton from '../RadioButton/RadioButton'
import Toggle from '../Toggle/Toggle'

const ListComponent: React.FC<ListComponentProps> = (props) => {

  const name = 'radio-group-'+React.useId()

  return (
    <ul className={styles.wrapper}>
      {props.options.map(el =>
      <li className={styles.option} key={el}>
        {props.type === 'checkbox' &&
        <Checkbox value={el} defaultChecked={false} onChange={props.onChange}><span>{el}</span></Checkbox>}
        {props.type === 'radio' &&
        <RadioButton name={name} value={el} defaultChecked={el === props.defaultCheckedElement} onChange={props.onChange}><span>{el}</span></RadioButton>}
        {props.type === 'toggle' &&
        <Toggle value={el} onChange={props.onChange}><span>{el}</span></Toggle>
        }
      </li>
      )}
    </ul>
  )
}

export default ListComponent