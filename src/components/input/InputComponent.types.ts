export type InputRef = {
    current: HTMLInputElement | null
}


export type InputProps = {
  type: string;
  value: string | number;
  size?: 'M'| 'L';
  className?: string;
  disabled?: boolean;
  errorMessage?: string;
  options?: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>)=>void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>)=>void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>)=>any;
  onClick?: (...args: any[])=>any;
}
