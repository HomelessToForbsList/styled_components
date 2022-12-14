export type InputRef = {
    current: HTMLInputElement | null
}


export type InputProps = {
  type: 'password' | 'select' | 'datepick';
  value: string | number;
  size?: 'M'| 'L';
  className?: string;
  disabled?: boolean;
  errorMessage?: string;
  options?: {value: string,label: string,subtitle?: string}[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>)=>void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>)=>void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>)=>any;
  onClick?: (value:string) => void;

}
