import React from 'react'

import IconComponent from '../Icon/IconComponent'
import CalendarIcon from '../Icon/Icons/CalendarIcon'
import Calendar from '../Calendar/Calendar'
import Modal from '../Modal/Modal'

import {DatePickerProps} from './DatePicker.types'

const DatePicker: React.FC<DatePickerProps> = (props) => {

  const [visibility, setVisibility] = React.useState(false)
  const position = React.useRef({top: 0, left: 0})

  React.useLayoutEffect(()=>{
    if(props.parentRef.current) {
      const rect = props.parentRef.current.getBoundingClientRect()
      position.current.top = rect.top+rect.height+15
      position.current.left = rect.x
    }
  },[props.parentRef])

  return (
    <div>
      <IconComponent onClick={()=>setVisibility(prev=> !prev)}>
        <CalendarIcon/>
      </IconComponent>
      {visibility &&
      <Modal position={position.current} onClose={()=>setVisibility(prev=> !prev)}>
        <Calendar visible={visibility} value={props.parentValue} onClick={props.onClick}/>
      </Modal>
      }
    </div>
  )
}

export default DatePicker