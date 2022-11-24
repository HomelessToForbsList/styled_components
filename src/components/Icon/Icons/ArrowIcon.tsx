type PropColor = {color?: string}

const ArrowIcon: React.FC<PropColor> = ({color}) => {
  return (
    <div style={{width: '100%', height: '100%'}}>
      <svg width='100%' height='100%' viewBox="0 0 12 8" stroke={color || '#10A8C9'} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L5 5L9 1"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )
}

export default ArrowIcon