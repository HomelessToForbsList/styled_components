
import React from "react"
import styles from './style.module.scss'

import {DropDownProps} from '../types'

  const Select: React.FC<DropDownProps> = (props) => {

  const[visible, setVisible] = React.useState(false)

  const openAndClose = ()=>{
    setVisible(prev => !prev)
    if(props.parentRef.current) props.parentRef.current.focus()
  }

  const closeOnBlur = (e: MouseEvent | any)=>{
    if(e.target.className === 'App') setVisible(false)
  }

  React.useEffect(()=>{
    if(visible) window.addEventListener('click',closeOnBlur)
    return () => window.removeEventListener('click', closeOnBlur)
  },[visible])


  return (
    <div className={styles.select_btn} onClick={openAndClose}>
      <svg className={visible ? styles.rotated : undefined} width="15" height="11" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={visible ? styles.focused : undefined} d="M1 1L5 5L9 1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      {visible ?
      <ul className={styles.list}>
      {props.options.map(el =>
      <li
        key={el}
        onClick={(e) => {props.onClick(e)}}
        >
          {el}
        </li>
        )}
      </ul>
      : null}
    </div>
  )
}

export default Select
