

type PropColor = {color?: string}

const ProjectsIcon: React.FC<PropColor> = ({color}) => {
  return (
    <div style={{width: '100%', height: '100%'}}>
    <svg viewBox="0 0 24 24" stroke={color || '#9CA4B3'} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.9988 7.99867H16.0017M8.9988 16.002H16.0017M8.9988 12.0003H16.0017M2.49609 7.99867H5.49734M2.49609 16.002H5.29826M2.49609 12.0003H5.29826M18.0026 21.0041H5.99755C4.89209 21.0041 3.99672 20.1087 3.99672 19.0032V4.99742C3.99672 3.89195 4.89209 2.99658 5.99755 2.99658H18.0026C19.108 2.99658 20.0034 3.89195 20.0034 4.99742V19.0032C20.0034 20.1087 19.108 21.0041 18.0026 21.0041Z"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    </div>
  )
}

export default ProjectsIcon