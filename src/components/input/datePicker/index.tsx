import React from 'react'
import styles from './style.module.scss'
import { DatePickerProps } from '../types'

function fillData( defaultDate: Date): Date[]{
  const data = []
  let daysAmount = 34
  if(defaultDate.getMonth() === 1 && defaultDate.getDay() === 1) daysAmount = 27
  if(defaultDate.getFullYear()%4 === 0 && defaultDate.getMonth() === 1 && defaultDate.getDay() === 1) daysAmount = 28
  let lastDay = new Date(defaultDate.getFullYear(), defaultDate.getMonth(),31)
  let count = defaultDate.getDay() === 0 ?  -6 : 1-defaultDate.getDay()
  if((lastDay.getDate() === 31 && lastDay.getDay() === 1) || (count === -6 && defaultDate.getMonth() !== 1)) daysAmount = 41
  for(let i=0; i <= daysAmount; i++){
    const day = new Date(defaultDate.getFullYear(), defaultDate.getMonth(), 1+count)
    data.push(day)
    count++
  }
  return data
}

const monthArr = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь',]


const DatePicker: React.FC<DatePickerProps> = (props) => {

  const defaultDate = new Date()
  defaultDate.setDate(1)
  const day = React.useRef(defaultDate)

  const [visible, setVisible] = React.useState(false)
  const [range, setRange] = React.useState( fillData(day.current))
  const [selected, setSelected] = React.useState('')


  const nextMonth = ()=>{
    const month = day.current.getMonth() === 11 ? 0: day.current.getMonth()+1
    const year = day.current.getMonth() === 11 ? day.current.getFullYear() +1 : day.current.getFullYear()
    day.current.setDate(1)
    day.current.setMonth(month)
    day.current.setFullYear(year)
    setRange(fillData(day.current))
  }

  const prevMonth = ()=>{
    const month = day.current.getMonth() === 0 ? 11 : day.current.getMonth()-1
    const year = day.current.getMonth() === 0 ? day.current.getFullYear() -1 : day.current.getFullYear()
    day.current.setDate(1)
    day.current.setMonth(month)
    day.current.setFullYear(year)
    setRange(fillData(day.current))
  }

  const nextYear = ()=>{
    day.current.setDate(1)
    day.current.setMonth(day.current.getMonth()-2)
    day.current.setFullYear( day.current.getFullYear()+1)
    setRange(fillData(day.current))
  }

  const prevYear = ()=>{
    day.current.setDate(1)
    day.current.setMonth(day.current.getMonth()+2)
    day.current.setFullYear( day.current.getFullYear()-1)
    setRange(fillData(day.current))
  }

  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toDateString()

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

  const handleClick = (el: Date): void => {
    setSelected(el.toLocaleDateString())
    props.onClick(el.toLocaleDateString())
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles['icon-container']} onClick={openAndClose}>
      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 1V5"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 1V5"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1 8H19"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M17 3H3C1.895 3 1 3.895 1 5V18C1 19.105 1.895 20 3 20H17C18.105 20 19 19.105 19 18V5C19 3.895 18.105 3 17 3Z"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.0132 11.729C9.87516 11.729 9.76316 11.841 9.76416 11.979C9.76416 12.117 9.87616 12.229 10.0142 12.229C10.1522 12.229 10.2642 12.117 10.2642 11.979C10.2642 11.841 10.1522 11.729 10.0132 11.729"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.0132 11.729C14.8752 11.729 14.7632 11.841 14.7642 11.979C14.7642 12.117 14.8762 12.229 15.0142 12.229C15.1522 12.229 15.2642 12.117 15.2642 11.979C15.2642 11.841 15.1522 11.729 15.0132 11.729"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.01316 15.729C4.87516 15.729 4.76316 15.841 4.76416 15.979C4.76416 16.117 4.87616 16.229 5.01416 16.229C5.15216 16.229 5.26416 16.117 5.26416 15.979C5.26416 15.841 5.15216 15.729 5.01316 15.729"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.0132 15.729C9.87516 15.729 9.76316 15.841 9.76416 15.979C9.76416 16.117 9.87616 16.229 10.0142 16.229C10.1522 16.229 10.2642 16.117 10.2642 15.979C10.2642 15.841 10.1522 15.729 10.0132 15.729"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      </div>
      <div className={styles['calendar-wrapper']}>
      <div className={!visible ? styles.calendar : styles.visible}>
        <div className={styles['calendar-head']}>
        <p className={styles.help}>double click for change year</p>
          <div>
            <img src='/img/Arrow.svg' alt='change-month' onClick={prevMonth} onDoubleClick={prevYear}/>
            <p>{monthArr[day.current.getMonth()] + ' ' + day.current.getFullYear()}</p>
            <img  src='/img/Arrow.svg' alt='change-month' onClick={nextMonth} onDoubleClick={nextYear}/>
          </div>
          <div className={styles['week-days']}>
            <span>Пн</span>
            <span>Вт</span>
            <span>Ср</span>
            <span>Чт</span>
            <span>Пт</span>
            <span>Сб</span>
            <span>Вс</span>
          </div>
        </div>
        <div className={styles['days-container']}>
          {range.map(el=>
          <p key={el.toString()}
          className={selected === el.toLocaleDateString() ? styles.selected
            : el.toDateString() === today ? styles.today
            : el.getMonth() !== day.current.getMonth() ? styles['non-valid_range']: undefined}
          onClick={()=>handleClick(el)}
          >
            {el.getDate()}
          </p>
            )}
        </div>
      </div>
      </div>
    </div>
  )
}

export default DatePicker