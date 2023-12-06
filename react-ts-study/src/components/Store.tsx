// rafc 로 즉시 생성가능
import React from 'react'
import { Address, Restaurant } from '../model/restaurant';

interface StoreProps {
    info:Restaurant,
    onChangeAddress(address:Address):void // return 이 없을때 void
}

// FC 에서도 제네릭을 통해서 props 에 받을 값의 타입을 지정할 수 있다.
const Store:React.FC<StoreProps> = ({info}) => {
  return (
    <div>{info.name}</div>
  )
}

export default Store;