import { 
  useEffect, 
  useRef, 
  useState } from "react";


export const useDebounce = <T extends (...args:any) => void>(func: T, delay=1000 ) => {
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const [ isLoading, setIsLoading ] = useState(false)

  const debouncer = (arg: T extends (arg: infer Arg) => void? Arg : any, forceStop?: boolean ) =>{
    const newTimer = setTimeout(() =>{
      func(arg)
      setIsLoading(false)
    }, delay)

    if ( forceStop ) {
      clearTimeout(newTimer)
    }

    clearTimeout(timer.current)
    setIsLoading(true)
    timer.current = newTimer
  }

  useEffect(() =>{
    if ( !timer.current ) return

    return () => clearTimeout(timer.current)
  }, [])

  return {
    debouncer,
    isLoading,
  }
}