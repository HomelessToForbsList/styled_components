export type OptionProps ={
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>)=>void
}

export type CheckboxProps ={
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>)=>void
}