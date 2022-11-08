

export type ModalProps = {
  children?: JSX.Element;
  onClose: () => void;
  position: {top: number; left: number}
}