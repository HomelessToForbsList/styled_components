import React from 'react'
import styles from './Calendar.module.scss'
import { CalendarProps } from './Calendar.types'
import fillData from '../../utilities/fillData'

const monthArr = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь',]


const Calendar: React.FC<CalendarProps> = (props) => {

  const defaultDate = new Date()
  defaultDate.setDate(1)
  const day = React.useRef(defaultDate)

  const [range, setRange] = React.useState( fillData(day.current))
  const [selected, setSelected] = React.useState('')


  const nextMonth = (e: React.MouseEvent<HTMLElement>)=>{
    e.stopPropagation()
    const month = day.current.getMonth() === 11 ? 0: day.current.getMonth()+1
    const year = day.current.getMonth() === 11 ? day.current.getFullYear() +1 : day.current.getFullYear()
    day.current.setDate(1)
    day.current.setMonth(month)
    day.current.setFullYear(year)
    setRange(fillData(day.current))
  }

  const prevMonth = (e: React.MouseEvent<HTMLElement>)=>{
    e.stopPropagation()
    const month = day.current.getMonth() === 0 ? 11 : day.current.getMonth()-1
    const year = day.current.getMonth() === 0 ? day.current.getFullYear() -1 : day.current.getFullYear()
    day.current.setDate(1)
    day.current.setMonth(month)
    day.current.setFullYear(year)
    setRange(fillData(day.current))
  }

  const nextYear = (e: React.MouseEvent<HTMLElement>)=>{
    e.stopPropagation()
    day.current.setDate(1)
    day.current.setMonth(day.current.getMonth()-2)
    day.current.setFullYear( day.current.getFullYear()+1)
    setRange(fillData(day.current))
  }

  const prevYear = (e: React.MouseEvent<HTMLElement>)=>{
    e.stopPropagation()
    day.current.setDate(1)
    day.current.setMonth(day.current.getMonth()+2)
    day.current.setFullYear( day.current.getFullYear()-1)
    setRange(fillData(day.current))
  }

  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toDateString()


  const handleClick = (el: Date): void => {
    setSelected(el.toLocaleDateString())
    props.onClick(el.toLocaleDateString())
  }

  return (

      <div className={!props.visible ? styles.calendar : styles.visible}>
        <div className={styles['calendar-head']}>
        <p className={styles.help}>double click for change year</p>
          <div>
            <img src='/img/Arrow.svg' alt='change-month' onClick={(e)=>prevMonth(e)} onDoubleClick={(e)=>prevYear(e)}/>
            <p>{monthArr[day.current.getMonth()] + ' ' + day.current.getFullYear()}</p>
            <img  src='/img/Arrow.svg' alt='change-month' onClick={(e)=>nextMonth(e)} onDoubleClick={(e)=>nextYear(e)}/>
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

  )
}

export default Calendar
