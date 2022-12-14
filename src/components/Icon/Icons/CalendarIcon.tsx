
type PropColor = {color?: string}

const CalendarIcon: React.FC<PropColor> = ({color}) => {
  return (
    <div style={{width: '100%', height: '100%'}}>
      <svg width='100%' height='100%' stroke={color || '#10A8C9'} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 1V5"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 1V5"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1 8H19"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M17 3H3C1.895 3 1 3.895 1 5V18C1 19.105 1.895 20 3 20H17C18.105 20 19 19.105 19 18V5C19 3.895 18.105 3 17 3Z"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.0132 11.729C9.87516 11.729 9.76316 11.841 9.76416 11.979C9.76416 12.117 9.87616 12.229 10.0142 12.229C10.1522 12.229 10.2642 12.117 10.2642 11.979C10.2642 11.841 10.1522 11.729 10.0132 11.729"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.0132 11.729C14.8752 11.729 14.7632 11.841 14.7642 11.979C14.7642 12.117 14.8762 12.229 15.0142 12.229C15.1522 12.229 15.2642 12.117 15.2642 11.979C15.2642 11.841 15.1522 11.729 15.0132 11.729"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.01316 15.729C4.87516 15.729 4.76316 15.841 4.76416 15.979C4.76416 16.117 4.87616 16.229 5.01416 16.229C5.15216 16.229 5.26416 16.117 5.26416 15.979C5.26416 15.841 5.15216 15.729 5.01316 15.729"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.0132 15.729C9.87516 15.729 9.76316 15.841 9.76416 15.979C9.76416 16.117 9.87616 16.229 10.0142 16.229C10.1522 16.229 10.2642 16.117 10.2642 15.979C10.2642 15.841 10.1522 15.729 10.0132 15.729"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )
}

export default CalendarIcon