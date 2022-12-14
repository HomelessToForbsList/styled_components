import React from 'react'
import styles from './Avatar.module.scss'
import { AvatarProps } from './Avatar.types'
import classNames from 'classnames'

const Avatar: React.FC<AvatarProps> = (props) => {

  const initials = props.name.split(' ').map(str => str.slice(0,1).toUpperCase()).join('')

  const avatarClassName = classNames(styles.avatar,{
    [styles[`size_${props.size}`]]: props.size
  }, props.className)

  return (
    <div className={styles.wrapper}>
      <div className={avatarClassName}>
        <p>{initials}</p>
      </div>
      {props.infoblock &&
      <div className={styles['text-content']}>
      {props.jobPosition && <p className={styles['job-position']}> {props.jobPosition}</p>}
      {props.name && <p className={styles.name}>{props.name}</p>}
      {props.email && <p className={styles.email}> {props.email}</p>}
      </div>
      }
    </div>
  )
}

export default Avatar