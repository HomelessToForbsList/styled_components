
import React from 'react'

const useWindowSize = (ref: HTMLElement | null) => {

  const [position, setPosition] = React.useState({top: 0, left: 0})

  React.useEffect(()=>{
    if(ref) {
      const rect = ref.getBoundingClientRect()
      setPosition({top: rect.top+rect.height+15,left : rect.x})
    }
    const getScrollHeight= (): void => {
      if(ref) {
        const rect = ref.getBoundingClientRect()
        setPosition(prev => ({top: rect.top+rect.height+15 , left: prev.left}))
      }
    }
    const getWindowWidth = ():void =>{
      if(ref) {
        const leftValue = ref.getClientRects()[0].x
        setPosition(prev => ({top: prev.top , left: leftValue}))
      }
    }
    window.addEventListener('scroll', getScrollHeight)
    window.addEventListener('resize', getWindowWidth)
    return () => {
      window.removeEventListener('scroll', getScrollHeight)
      window.removeEventListener('resize', getWindowWidth)
    }
  },[ref])

  return position
}

export default useWindowSize