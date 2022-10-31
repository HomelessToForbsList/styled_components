import React ,{useRef }from 'react'
import styles from './style.module.scss'
import {InputRef, InputProps} from './types'
import Password from './password'
import Select from './select'
import DatePicker from './datePicker'

const Input: React.FC<InputProps> = (props) => {


  const [labelStyle, setLabelStyle] = React.useState(styles.label)

  const handleFocus = (e:React.ChangeEvent<HTMLInputElement>):void =>{
    setLabelStyle(styles['label-focus'])
    if(props.onFocus) props.onFocus(e)
  }

  const handleBlur = (e:React.ChangeEvent<HTMLInputElement>):void =>{
    setLabelStyle(inputEl.current && inputEl.current.value ? styles['label-focus'] : styles.label)
    if(props.onBlur) props.onBlur(e)
  }


  const inputEl:InputRef = useRef(null)


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

  const setOption = ( e:React.ChangeEvent )=>{
    if(inputEl.current && e.target.textContent) {
      inputEl.current.value = e.target.textContent
    }
    if(props.onClick) props.onClick(e)
  }

  const selectDate = (str: string) =>{
    if(inputEl.current) {
      inputEl.current.value = str
    }
    if(props.onClick) props.onClick(str)
  }



  return (
    <div className={styles.wrapper}>
      <input
      id={props.type}
      className={props.error ? styles.error : undefined}
      disabled={props.disabled}
      type={props.type}
      value={props.value}
      onChange={(e) => props.onChange(e)}
      onFocus={(e)=>handleFocus(e)}
      onBlur={(e)=>handleBlur(e)}
      ref={inputEl}
      autoComplete='off'
      />
      <label
        htmlFor='input'
        className={inputEl.current && inputEl.current.value? styles['label-focus'] :labelStyle}
        onClick={labelClick}
      >
        Текст...
      </label>
      {props.type === 'password' && <Password onClick={showPassword}/>}
      {props.type === 'select' && <Select  parentRef={inputEl} onClick={setOption} options={props.options} />}
      {props.type === 'datepick' && <DatePicker parentRef={inputEl} onClick={selectDate}/>}
    </div>
  )
}

export default Input