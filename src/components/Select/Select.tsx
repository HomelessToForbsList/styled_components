

import React from 'react'
import {
  default as ReactSelect,
  components,
  DropdownIndicatorProps,
  OptionProps
} from 'react-select';
import './Select.scss'

import { SelectProps, Option} from './Select.types';


import ArrowIcon from '../Icon/Icons/ArrowIcon';
import Typography from '../Typography/Typography';


const DropdownIndicator = (props: DropdownIndicatorProps<Option>) => {

  return (
    <components.DropdownIndicator className={props.selectProps.menuIsOpen ? 'react-select__dropdown--open' : 'react-select__dropdown--closed'} {...props}>
        <ArrowIcon/>
    </components.DropdownIndicator>
  );
};

const CustomOption = (props: OptionProps<Option>) =>{

  return(
    <components.Option className='react-select__option' {...props}>
      <div className='option-wrapper'>
        <Typography variant='bodyM' >{props.label}</Typography>
        {props.data.subtitle && <Typography variant='caption' >{props.data.subtitle}</Typography>}
      </div>
    </components.Option>
  )
}



const Select:React.FC<SelectProps> = ({options, onClick}) => {

  return (
    <div>
      <ReactSelect
      options={options}
      className={"react-select-container"}
      classNamePrefix={"react-select"}
      components={{Option: CustomOption, DropdownIndicator}}
      closeMenuOnSelect={true}
      isMulti={false}
      onChange={(newValue) => newValue  && onClick(newValue.value)}
      />
    </div>
  )
}

export default Select