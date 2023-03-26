import { createContext } from "react";
import {  FullSubscription } from "../models/Sub";
import { useAsyncStorage } from "../hooks/useAsyncStorage";
import uuid from 'react-native-uuid';

interface SubContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

interface SubContextState {
  fullSubscription:  FullSubscription[]
  add: (sub:  Omit<FullSubscription, "id">) => void
  removeById: (id: string) => void
  update: (id: string, sub: Omit<FullSubscription, "id">) => void
  totalCost: (cycle: 'mensual' | 'anual') => number
}


const SubContextStateDefault: SubContextState = {
  fullSubscription: [],
  add: (sub: Omit<FullSubscription, "id">) => {},
  removeById: (id: string) => {},
  update: (id: string, sub:   Omit<FullSubscription, "id">) => {},
  totalCost : (cycle: 'mensual' | 'anual'): number => 0
}

export const SubContext =  createContext(SubContextStateDefault);


export const SubContextProvider = ({ children } : SubContextProviderProps) => {
  const [fullSubscription, setSubscription] = useAsyncStorage<FullSubscription[]>({key: 'subscriptions', initialValue:[]})

  const add = (sub:  Omit<FullSubscription, "id">) => {
    setSubscription([...fullSubscription, {...sub, id:  uuid.v4() as string}])
  }

  const removeById = (id: string) => {
    const newSubs = fullSubscription.filter(sub => sub.id !== id)
    setSubscription(newSubs)
  }

  const update = (id: string, sub: Omit<FullSubscription, "id">) => {
    const newSubs = fullSubscription.map(subItem => subItem.id === id ? {...subItem, ...sub} : subItem)
    setSubscription(newSubs)
  }

  const totalCost = (cycle: 'mensual' | 'anual'): number => {
    
    const total = fullSubscription.reduce((acc, sub) => {
      return cycle === 'mensual' 
        ? acc + (sub.cycle === 'mensual' ? sub.price : 0)
        : acc + (sub.cycle === 'mensual' ? sub.price * 12 : sub.price)
    }, 0)

    return total
  }

  return (
    <SubContext.Provider value={{
      fullSubscription,
      totalCost,
      add,
      removeById,
      update
      
    }}>
      {children}
    </SubContext.Provider>
  )
}
