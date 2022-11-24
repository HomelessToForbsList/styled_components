
import React from 'react'
import Typography from '../Typography/Typography'
import styles from './ProductCard.module.scss'
import { ProductCardProps } from './ProductCard.types'
import Rating from '../Rating/Rating'
import Badge from '../Badge/Badge'
import IconComponent from '../Icon/IconComponent'
import MoreIcon from '../Icon/Icons/MoreIcon'

const ProductCard: React.FC<ProductCardProps> = (props) => {

  const onImgError = (e : React.SyntheticEvent<HTMLImageElement>)=>{
      e.currentTarget.onerror = null
      e.currentTarget.src = '/img/NoImage.svg'
  }

  const createPrice = (num: number): string => {
    const price = num.toString()
    .split('')
    .reverse()
    .map((el, index) => index%3 === 0 && index !==0 ? el+' ' : el)
    .reverse()
    .join('')
    return price
  }


  return (
    <div className={styles['card-container']}>
      <div className={styles.head}>
        <div className={styles.img}>
          <img src={props.src} alt='product_image' onError={(e) => onImgError(e)} />
        </div>
        <div className={styles.surface}>
          <div className={styles['badge-container']}>
            <Badge color='orange' text='Популярный'/>
          </div>
          <IconComponent className={styles['more-btn']}><MoreIcon/></IconComponent>
        </div>
      </div>
      <div className={styles['info-block']}>
        <Typography variant='heading4'>{props.title}</Typography>
        <Typography variant='caption' >{props.code}</Typography>
        <Rating range={5} rating={props.rating}/>
        <Typography variant='bodyM' >{props.description}</Typography>
      </div>
      <div className={styles['action-block']}>
        <div className={styles.price}>
          <Typography variant='heading4' >{createPrice(props.price)}</Typography>
          <img src='/img/₽.svg' alt='руб.' height='20px'/>
        </div>
        <button><Typography variant='caption'>Добавить</Typography></button>
      </div>
    </div>
  )
}

export default ProductCard