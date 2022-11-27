type PropColor = {color?: string}

const ArrowIcon: React.FC<PropColor> = ({color}) => {
  return (
    <div >
      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 5L5 1L1 5" stroke="#10A8C9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )
}

export default ArrowIcon