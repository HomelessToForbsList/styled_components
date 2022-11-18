
import React from 'react'
import styles from './SideBar.module.scss'

import DoubleArrow from '../Icon/Icons/DoubleArrow'
import Plus from '../Icon/Icons/Plus'
import Typography from '../Typography/Typography'
import Avatar from '../Avatar/Avatar'

import StatisticIcon from '../Icon/Icons/StatisticIcon'
import ProjectsIcon from '../Icon/Icons/ProjectsIcon'
import CatalogIcon from '../Icon/Icons/CatalogIcon'
import UsersIcon from '../Icon/Icons/UsersIcon'
import SettingsIcon from '../Icon/Icons/SettingsIcon'

const options = ['Статстика', 'Проекты', 'Каталог', 'Пользователи', 'Настройки системы']
const optionIcons = [<StatisticIcon/>, <ProjectsIcon/>,<CatalogIcon/>,<UsersIcon/>,<SettingsIcon/>]

type OptionProps ={
  icon: React.ReactNode;
  text: string;
  className: string;
}

const Option: React.FC<OptionProps> = ({icon, text, className}) => {
  return (
    <li className={className === styles.hidden ? styles['option-closed'] : styles.option}>
      <div>{icon}</div>
      <label className={className}>
        <Typography className={className} variant='subtitleM'>{text}</Typography>
      </label>
    </li>
  )
}

const SideBar = () => {

  const [toggleOpen, setToggleOpen] = React.useState(true)

  return (
    <nav className={toggleOpen ? styles.container : styles['container-closed']}>
      <div className={styles['sidebar_header']}>
        <div className={styles.logo+' '+(toggleOpen ? styles.open :styles.hidden)}></div>
        <button className={styles.toggle+' '+(toggleOpen ? styles['toggle-open'] : styles['toggle-closed'])} onClick={()=> setToggleOpen(prev => !prev)}>
          <DoubleArrow/>
        </button>
      </div>
      <div className={styles['btn_newproject']}>
      <div className={styles['btn-bg']}>
        <button id='add-btn'>
          <Plus/>
        </button>
      </div>
      <label htmlFor='add-btn' className={styles['btn_new_label']}>
        <Typography className={toggleOpen ? styles.open :styles.hidden} variant='heading5'>Новый проект</Typography>
      </label>
      </div>
      <ul className={styles.options}>
        {options.map((el,index) =>
          <Option text={el} icon={optionIcons[index]} className={toggleOpen ? styles.open : styles.hidden}/>
        )}
      </ul>
      <div className={styles['profile-wrapper']}>
      <div className={toggleOpen ? styles['profile-block'] : styles['profile-block-closed']}>
        <Avatar size='L' name='Андрей Орлов' email='testmail@hikvision.ru' infoblock={toggleOpen}/>
        <div className={styles.info}>
          <Typography variant='caption'>{'Роль'}</Typography>
          <Typography variant='bodyM'>{'Sales менеджер'}</Typography>
        </div>
        <div className={styles.info}>
          <Typography variant='caption'>{'Группа'}</Typography>
          <Typography variant='bodyM'>{'Название группы'}</Typography>
        </div>
      </div>
      </div>
      <div className={toggleOpen ? styles['help-block'] : styles['help-block-closed']}>
        <p>{'Русский'}</p>
        <p>{'Помощь'}</p>
      </div>
    </nav>
  )
}

export default SideBar