export type DropdownProps={
  options?: string[];
  onClick: (e:any)=>void;
  parentRef: {current: HTMLElement | null};
}