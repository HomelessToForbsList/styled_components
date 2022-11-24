
type PropColor = {color?: string}

const DoubleArrow: React.FC<PropColor> = ({color}) => {
  return (
    <div style={{width: '100%', height: '100%'}}>
    <svg viewBox="0 0 24 24" stroke={color || '#10A8C9'} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 16L13 12L17 8"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11 16L7 12L11 8"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    </div>
  )
}

export default DoubleArrow