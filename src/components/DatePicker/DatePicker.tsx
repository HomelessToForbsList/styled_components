
import React from 'react'
import {default as ReactDatePicker }from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import styles from './DatePicker.module.scss'
import './DatePicker.scss'
import CalendarIcon from '../Icon/Icons/CalendarIcon';

import type {DatePickerProps, WrapperProps, HeaderProps, InputProps } from './DatePicker.types';

import {forwardRef} from 'react'

//import {parseISO} from 'date-fns';


const CustomHeader: React.FC<HeaderProps> = ({date,increaseMonth, decreaseMonth, decreaseYear, increaseYear, monthDate})=>{

  console.log(monthDate)

  const monthArr = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь',]

  const prevYear = () =>{
    decreaseYear()
    increaseMonth()
    increaseMonth()
  }

  const nextYear = () =>{
    increaseYear()
    decreaseMonth()
    decreaseMonth()
  }

  return(
    <div className={styles['calendar-head']}>
        <p className={styles.help}>double click for change year</p>
          <div>
            <img src='/img/Arrow.svg' alt='change-month' onClick={decreaseMonth} onDoubleClick={prevYear}/>
            <p>{monthArr[date.getMonth()]+' '+date.getFullYear()}</p>
            <img  src='/img/Arrow.svg' alt='change-month' onClick={increaseMonth} onDoubleClick={nextYear}/>
          </div>
        </div>
  )
}

const Wrapper: React.FC<WrapperProps> = ({children}) =>{
  return(
    <div className={styles.wrapper}>
      {children}
    </div>
  )
}

const CustomInput: React.FC<InputProps> = forwardRef(({onClick},ref)=>{
return (
  <button
  className={styles.button}
  //@ts-ignore
  //ref={ref}
  onClick={onClick}
  >
      <CalendarIcon/>
    </button>
)});

const DatePicker: React.FC<DatePickerProps> = ({onClick}) => {

  const now = new Date()

  // const parseString = (str: string | number) =>{
  //   return parseISO(str.toString().split('.').reverse().join('-'))
  // }



  return (
    <ReactDatePicker
      onChange={(date: Date)=> {
        onClick(date.toLocaleDateString())
      }}
      customInput={ <CustomInput  />}
      renderCustomHeader={({date,decreaseYear, decreaseMonth,increaseMonth,increaseYear, monthDate}: any) =>
        <CustomHeader monthDate={monthDate} date={date} decreaseYear={decreaseYear} decreaseMonth={decreaseMonth} increaseMonth={increaseMonth} increaseYear={increaseYear}/>
      }
      //renderCustomHeader={(data: any) => console.log(data)}
      calendarContainer={Wrapper}
      dayClassName={(date: Date) =>
        date.toDateString() === now.toDateString() ? styles['day-now'] : styles['day-default']}
      showPopperArrow={false}
      calendarStartDay={1}
      popperPlacement="top-end"
      popperModifiers={[
        {
          name: "offset",
          options: {
            offset: [60, 10],
          },
        }
      ]}
      />
  )
}

export default DatePicker