import React from 'react'
import IconComponent from '../Icon/IconComponent'
import ArrowIcon from '../Icon/Icons/ArrowIcon'
import Modal from '../Modal/Modal'
import styles from './Dropdown.module.scss'
import { DropdownProps } from './Dropdown.types'

import useWindowSize from '../../hooks/useWindowSize'

const Dropdown: React.FC<DropdownProps> = (props) => {

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
        <ArrowIcon/>
      </IconComponent>
      {visibility &&
      <Modal style={childrenStyle} onClose={()=>setVisibility(prev=> !prev)}>
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