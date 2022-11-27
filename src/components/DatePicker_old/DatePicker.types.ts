export type DatePickerProps = {
  onClick: (str: string)=>void
  parentRef: {current: HTMLElement | null};
  parentValue?: string | number;
}