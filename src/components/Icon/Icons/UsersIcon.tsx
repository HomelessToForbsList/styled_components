

type PropColor = {color?: string}

const UsersIcon: React.FC<PropColor> = ({color}) => {
  return (
    <div style={{width: '100%', height: '100%'}}>
    <svg  viewBox="0 0 24 24" stroke={color || '#9CA4B3'} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.321 16.541C16.1 15.152 14.906 14.088 13.456 14.088H10.544C9.093 14.088 7.9 15.152 7.679 16.541M12 21C7.029 21 3 16.971 3 12C3 7.029 7.029 3 12 3C16.971 3 21 7.029 21 12C21 16.971 16.971 21 12 21ZM13.591 7.65901C14.4697 8.53769 14.4697 9.96231 13.591 10.841C12.7123 11.7197 11.2877 11.7197 10.409 10.841C9.53034 9.96231 9.53034 8.53769 10.409 7.65901C11.2877 6.78033 12.7123 6.78033 13.591 7.65901Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    </div>
  )
}

export default UsersIcon