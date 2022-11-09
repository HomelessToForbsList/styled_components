
import React from 'react'
import { TypographyProps, TypographyVariants } from './Typography.types'
import styles from './Typography.module.scss'
import classNames from 'classnames'

const Typography:React.FC<TypographyProps> = ({variant, children, style, className}) => {
  return React.createElement(
    TypographyVariants[variant],
    {style: style,className: classNames(styles[variant], className)},
    children)
}

export default Typography