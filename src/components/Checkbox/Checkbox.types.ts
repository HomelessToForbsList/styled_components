export type CheckboxProps ={
  value: string;
  defaultChecked?: boolean;
  children?: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>)=>void
}
