import React from 'react'
import { Menu } from '../model/restaurant';


// extends를 통해서 해당 타입이 보이지는 않지만 그대로 들어가져 있음
interface BestMenuProps extends Omit<Menu,'price'> {
    onShowBestMenuName(name:string):string 
}

// type 으로 interface extends 와 같이 해주는 방법
// type BestMenuProps = Menu & {
//     onShowBestMenuName(name:string):string 
// }

const BestMenu:React.FC<BestMenuProps> = ({name, category, onShowBestMenuName}) => {
  return (
    <div>{name}</div>
  )
}

export default BestMenu;