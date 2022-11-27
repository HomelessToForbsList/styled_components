

export type SelectProps = {
  options: Option[];
  onClick: (value: string)=>void
}

export type Option = {
  value: string,
  label: string,
  subtitle?: string
}
