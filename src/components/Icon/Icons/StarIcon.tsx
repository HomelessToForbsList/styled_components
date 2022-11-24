

type PropColor = {color?: string}

const StarIcon: React.FC<PropColor> = ({color}) => {
  return (
    <div style={{width: '100%', height: '100%'}}>
      <svg width="100%" height="100%" stroke='#F2994A' viewBox="0 0 20 19" fill={color || 'none'} xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M8.43357 1.46045C9.07785 0.168037 10.9219 0.168157 11.566 1.46066L13.4315 5.20405L17.6181 5.82072C19.0488 6.03145 19.621 7.78804 18.5889 8.80099L15.555 11.7786L16.2694 15.9756C16.5131 17.4071 15.0079 18.4955 13.7248 17.8156L9.9999 15.8418L6.27495 17.8156C4.99188 18.4955 3.48672 17.4071 3.73037 15.9756L4.44474 11.7786L1.41085 8.80095C0.37879 7.78801 0.950953 6.03145 2.38161 5.82069L6.56732 5.20405L8.43357 1.46045Z" />
      </svg>
    </div>
  )
}

export default StarIcon