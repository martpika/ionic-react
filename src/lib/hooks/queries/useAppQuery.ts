import { UseCustomReactQuery } from "@/utilities/types"
import { useQuery } from "@tanstack/react-query"
import { useEffect } from "react"


export const useAppQuery: UseCustomReactQuery = (options, queryClient) =>{
  const queryResult = useQuery(options, queryClient)
  
  useEffect(() =>{
    if ( options.onSuccess && queryResult.isSuccess && !queryResult.isRefetching ) {
      options.onSuccess(queryResult.data)
    }

  }, [ queryResult.isSuccess ])

  return queryResult
}