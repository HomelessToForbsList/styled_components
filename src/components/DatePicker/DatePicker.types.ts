
export type DatePickerProps ={
  onClick: (date: string) => void;
}

export type WrapperProps={
  children: React.ReactNode
}

export type HeaderProps = {
  decreaseMonth: any;
  increaseMonth: any;
  decreaseYear: any;
  increaseYear: any;
  date: Date;
  monthDate: any
}

export type InputProps = {
  value?: string;
  onClick?: () => void
  ref?: React.Ref<HTMLButtonElement>;
}