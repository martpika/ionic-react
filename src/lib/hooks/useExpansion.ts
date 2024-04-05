import { useState } from "react"


export const useExpansion = () =>{
  const [ isExpanded, setIsExpanded ] = useState(false)

  return {
    isExpanded,
    handleExpansion: () => setIsExpanded(prev => !prev)
  }
}