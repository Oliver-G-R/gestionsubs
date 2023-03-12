import { createContext } from "react";

export const SubContext =  createContext({});


interface SubContextProps {
  children: JSX.Element | JSX.Element[];
}



export const SubContextProvider = ({ children } : SubContextProps) => {
  return (
    <SubContext.Provider value={{}}>
      {children}
    </SubContext.Provider>
  )
}
