export type ListComponentProps ={
  options: string[];
  type: 'checkbox' | 'radio' | 'toggle';
  defaultCheckedElement?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>)=>void
}