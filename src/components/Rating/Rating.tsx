

import React from 'react'
import StarIcon from '../Icon/Icons/StarIcon'
import styles from './Rating.module.scss'

type RatingProps ={
  rating:number;
  range: number;
}

const Rating: React.FC<RatingProps> = ({rating, range}) => {

  const arr = new Array(range).fill('')

  return (
    <div className={styles['rating-container']}>
      {arr.map((_,index) =>
      <StarIcon color={index < rating ? '#F2994A' : undefined}/>
        )}
    </div>
  )
}

export default Rating