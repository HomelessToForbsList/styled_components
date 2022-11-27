import React from 'react'

import IconComponent from '../Icon/IconComponent'
import CalendarIcon from '../Icon/Icons/CalendarIcon'
import Calendar from '../Calendar/Calendar'
import Modal from '../Modal/Modal'

import {DatePickerProps} from './DatePicker.types'

import useWindowSize from '../../hooks/useWindowSize'

const DatePicker: React.FC<DatePickerProps> = (props) => {

  const [visibility, setVisibility] = React.useState(false)

  const position = useWindowSize(props.parentRef.current)

  const childrenStyle: React.CSSProperties = {
    position: 'absolute',
    top: position.top + 'px',
    left: position.left + 'px',
    display: 'inline-block'
  }


  return (
    <div>
      <IconComponent onClick={()=>setVisibility(prev=> !prev)}>
        <CalendarIcon/>
      </IconComponent>
      {visibility &&
      <Modal style={childrenStyle} onClose={()=>setVisibility(prev=> !prev)}>
        <Calendar visible={visibility} value={props.parentValue} onClick={props.onClick}/>
      </Modal>
      }
    </div>
  )
}

export default DatePicker