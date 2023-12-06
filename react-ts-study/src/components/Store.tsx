// rafc 로 즉시 생성가능
import React from 'react'
import { Restaurant } from '../model/restaurant';

interface StoreProps {
    info:Restaurant
}

// FC 에서도 제네릭을 통해서 props 에 받을 값의 타입을 지정할 수 있다.
const Store:React.FC<StoreProps> = (props) => {
  return (
    <div>Store</div>
  )
}

export default Store;