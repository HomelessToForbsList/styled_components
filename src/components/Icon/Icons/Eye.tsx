
type PropColor = {color?: string}

const Eye: React.FC<PropColor> = ({color}) => {
  return (
    <div style={{width: '100%', height: '100%'}}>
    <svg width='100%' height='100%' viewBox="0 0 20 16" stroke={color || '#10A8C9'} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M1.11775 8.467C0.96075 8.176 0.96075 7.823 1.11775 7.532C3.00975 4.033 6.50475 1 9.99975 1C13.4948 1 16.9898 4.033 18.8818 7.533C19.0388 7.824 19.0388 8.177 18.8818 8.468C16.9898 11.967 13.4948 15 9.99975 15C6.50475 15 3.00975 11.967 1.11775 8.467Z"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.1208 5.87868C13.2924 7.05025 13.2924 8.94975 12.1208 10.1213C10.9493 11.2929 9.04976 11.2929 7.87819 10.1213C6.70662 8.94975 6.70662 7.05025 7.87819 5.87868C9.04976 4.70711 10.9493 4.70711 12.1208 5.87868"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    </div>
  )
}

export default Eye
