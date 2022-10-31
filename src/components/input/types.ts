export type InputRef = {
    current: HTMLInputElement | null
}

//React.Dispatch<React.SetStateAction<string>>

export type InputProps = {
  type: string;
  disabled?: boolean;
  value: string | number;
  error?: boolean;
  options: string[];
  onChange: (...args: any[])=>any;
  onFocus?: (...args: any[])=>any;
  onBlur?: (...args: any[])=>any;
  onClick?: (...args: any[])=>any;
}

export type PasswordProps={
  onClick: ()=>void
}

export type ListProps ={
  id: string;
}

export type DropDownProps={
  options: string[];
  onClick: (e:any)=>void;
  parentRef: {current: HTMLElement | null};
}

export type DatePickerProps ={
  onClick: (str: string)=>void
  parentRef: {current: HTMLElement | null};
}