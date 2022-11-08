import React from 'react'
import { ModalProps } from './Modal.types'
import styles from './Modal.module.scss'
import ReactDom  from 'react-dom'
import createPortalDiv from '../../utilities/createPortalDiv'

const portal = createPortalDiv()

const Modal: React.FC<ModalProps> = ({children, ...props}) => {

  const position: React.CSSProperties = {
    position: 'relative',
    top: props.position.top + 'px',
    left: props.position.left + 'px',
    display: 'inline-block'
  }

  return ReactDom.createPortal(
    <div  className={styles.modal} onClick={props.onClose}>
      <div style={position}>
      {children}
      </div>
    </div>
  , portal)
}

export default Modal