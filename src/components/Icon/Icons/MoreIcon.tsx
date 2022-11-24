

type PropColor = {color?: string}

const MoreIcon: React.FC<PropColor> = ({color}) => {
  return (
    <div style={{width: '100%', height: '100%'}}>
    <svg width="100%" height="100%" viewBox="0 0 19 16" stroke="#515B6C" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 11.5H1M12 6.5H1M12 1.5H1M14.5 8V15.0711M18.0355 11.5355H10.9645" stroke="#323232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    </div>
  )
}

export default MoreIcon