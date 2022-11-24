

import React from 'react'
import styles from './TabBar.module.scss'
import Typography from '../Typography/Typography'
import { TabBarProps } from './TabBar.types'

const TabBar:React.FC<TabBarProps> = ({options, defaultSelected}) => {

  const [active, setActive] = React.useState(options.indexOf(defaultSelected))

  return (
      <ul className={styles['tabs-container']}>
        {options.map((el, index) =>
          <li onClick={()=> setActive(index)}>
            <Typography
            variant='subtitleM'
            className={styles.option+' '+(index === active ? styles.active :'')}
            >
              {el}
            </Typography>
          </li>
        )}
      </ul>
  )
}

export default TabBar