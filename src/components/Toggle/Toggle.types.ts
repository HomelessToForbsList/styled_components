export type ToggleProps={
  value: string;
  defaultChecked?: boolean;
  labelText?: string;
  children?: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}