import React from "react";
import { Loader } from "./shared/loader";


type GuardProps = {
  children?: React.ReactNode,
  // The userRole is changeable
  userRole?: "Admin" | "User" | "SuperAdmin"
}

const Guard = ({ children, userRole }: GuardProps) =>{
  // here you will add your query or mutation

  // if ( mutation.isPending || query.isPending ) {
  //   return (<Loader />)
  // }

  return (
    <>
      { children }
    </>
  )
}


export default Guard