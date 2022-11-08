import React from 'react'
import IconComponent from '../Icon/IconComponent'
import ArrowIcon from '../Icon/Icons/ArrowIcon'
import Modal from '../Modal/Modal'
import styles from './Dropdown.module.scss'
import { DropdownProps } from './Dropdown.types'

const Dropdown: React.FC<DropdownProps> = (props) => {

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
        <ArrowIcon/>
      </IconComponent>
      {visibility &&
      <Modal position={position.current} onClose={()=>setVisibility(prev=> !prev)}>
      <ul className={styles.list}>
      {props.options?.map(el =>
      <li
        key={el}
        onClick={(e) => {props.onClick(e)}}
        >
          {el}
        </li>
        )}
      </ul>
      </Modal>
      }
    </div>
  )
}

export default Dropdown