
type PropColor = {color?: string}

const StatisticIcon: React.FC<PropColor> = ({color}) => {
  return (
    <div style={{width: '100%', height: '100%'}}>
      <svg  viewBox="0 0 24 24" stroke={color || '#9CA4B3'} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.333 17V11.444C10.333 10.831 10.831 10.333 11.444 10.333H13.666M13.667 17V8.111C13.667 7.498 14.164 7 14.778 7H15.889C16.502 7 17 7.498 17 8.111V15.889C17 16.502 16.502 17 15.889 17H8.111C7.498 17 7 16.502 7 15.889V14.778C7 14.165 7.498 13.667 8.111 13.667H10.333M18 21H6C4.343 21 3 19.657 3 18V6C3 4.343 4.343 3 6 3H18C19.657 3 21 4.343 21 6V18C21 19.657 19.657 21 18 21Z"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )
}

export default StatisticIcon