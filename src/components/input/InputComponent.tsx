import React ,{useRef }from 'react'
import styles from './InputComponent.module.scss'
import classNames from 'classnames'
import {InputRef, InputProps} from './InputComponent.types'
import Password from './Password/Password'
//import DatePicker from '../DatePicker_old/DatePicker'
//import Dropdown from '../Dropdown/Dropdown'


import DatePicker from '../DatePicker/DatePicker'
import Select from '../Select/Select'

const Input: React.FC<InputProps> = (props) => {

  const inputEl:InputRef = useRef(null)


  const handleFocus = (e: React.FocusEvent<HTMLInputElement>):void =>{
    if(props.onFocus) props.onFocus(e)
  }

  const handleBlur = (e:React.FocusEvent<HTMLInputElement>):void =>{
    if(props.onBlur) props.onBlur(e)
  }


  const labelClick = ():void =>{
    if(inputEl?.current !== null){
      inputEl.current.focus()
    }
  }

  const showPassword = ()=>{
    if(inputEl?.current !== null){
      inputEl?.current?.type === 'text' ? inputEl.current.type = 'password' : inputEl.current.type = 'text'
    }
  }

  const setOption = ( value: string )=>{
    if(inputEl.current && value) {
      inputEl.current.value = value
    }
    if(props.onClick) props.onClick(value)
  }

  const selectDate = (str: string) =>{
    if(inputEl.current) {
      inputEl.current.value = str
    }
    if(props.onClick) props.onClick(str)
  }

  const inputClassName = classNames(styles.input, {
    [styles.error] : props.errorMessage,
    [styles[`size_${props.size}`]]: props.size
  }, props.className)


  return (
    <div className={styles.container}>
    <div className={styles.wrapper}>
      <input
      id='input'
      className={inputClassName}
      disabled={props.disabled}
      type={props.type}
      value={props.value}
      onChange={(e) => props.onChange(e)}
      onFocus={(e) => handleFocus(e)}
      onBlur={(e)=>handleBlur(e)}
      ref={inputEl}
      autoComplete='off'
      />
      <label
        htmlFor='input'
        className={(inputEl.current && inputEl.current.value) || props.value? styles['label-focus'] :styles.label}
        onClick={labelClick}
      >
        ??????????...
      </label>
      <div className={styles.option}>
      {props.type === 'password' && <Password onClick={showPassword}/>}
      {(props.type === 'select' && props.options ) &&
      <Select
      //parentRef={inputEl}
      options={props.options}
      onClick={setOption}/>}
      {props.type === 'datepick' &&
      <DatePicker
      //parentRef={inputEl}
      //parentValue={props.value}
      //defaultValue={props.value}
      onClick={selectDate} />}
      </div>
    </div>
    {props.errorMessage && <p className={styles['error-text']}>{props.errorMessage}</p>}
    </div>
  )
}

export default Input