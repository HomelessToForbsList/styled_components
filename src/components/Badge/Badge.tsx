
import React, { MutableRefObject } from 'react'
import { BadgeProps } from './Badge.types'
import styles from './Badge.module.scss'

const Badge: React.FC<BadgeProps> = ({children,count, rounded}) => {

  const badgeRef: MutableRefObject<null | HTMLDivElement> = React.useRef(null)

  const [value,setValue] = React.useState(0)

  React.useEffect(()=>{
    if(badgeRef.current && rounded){
    const height = badgeRef.current.clientHeight
    setValue(Math.sqrt(Math.pow((height/2*(Math.sqrt(2)-1)),2) / 2))
    }
  },[rounded])


  return (
    <div ref={badgeRef}  className={styles['badge-wrapper']}>
      <p className={styles.badge} style={rounded ? {top: value, right: value} : undefined}>{count}</p>
      {children}
    </div>
  )
}

export default Badge