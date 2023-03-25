import { Dispatch, SetStateAction } from 'react';

export interface ISubModal {
  setShowModal:Dispatch<SetStateAction<boolean>>
  showModal: boolean
}
