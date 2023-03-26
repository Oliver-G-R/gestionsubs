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
  update: (id: string, sub:  FullSubscription) => void
}


const SubContextStateDefault: SubContextState = {
  fullSubscription: [],
  add: (sub: Omit<FullSubscription, "id">) => {},
  removeById: (id: string) => {},
  update: (id: string, sub:  FullSubscription) => {}
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

  const update = (id: string, sub:  FullSubscription) => {
    const newSubs = fullSubscription.map(subItem => subItem.id === id ? {...subItem, ...sub} : subItem)
    setSubscription(newSubs)
  }

  return (
    <SubContext.Provider value={{
      fullSubscription,
      add,
      removeById,
      update

    }}>
      {children}
    </SubContext.Provider>
  )
}
