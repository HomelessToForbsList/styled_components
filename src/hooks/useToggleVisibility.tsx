import {useState, useEffect} from 'react';


export function useToggleVisibility(parentRef:{current: HTMLElement | null}) {

  const[visible, setVisible] = useState(false)

  const openOrClose = ()=>{
    setVisible(prev => !prev)
    if(parentRef.current) parentRef.current.focus()
  }

  const closeOnBlur = (e: MouseEvent | any)=>{
    if(e.target.className === 'App') setVisible(false)
  }

  useEffect(()=>{
    if(visible) {
      window.addEventListener('click',closeOnBlur)}
    return () => {
      window.removeEventListener('click', closeOnBlur)
    }
  },[visible])

  return [visible, openOrClose] as const
}