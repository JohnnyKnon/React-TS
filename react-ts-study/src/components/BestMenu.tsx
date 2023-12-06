import React from 'react'
import { Menu } from '../model/restaurant';


// extends를 통해서 해당 타입이 보이지는 않지만 그대로 들어가져 있음
interface BestMenuProps extends Menu {
    onShowBestMenuName(name:string):string 
}

const BestMenu:React.FC<BestMenuProps> = ({name, price, category, onShowBestMenuName}) => {
  return (
    <div>{name}</div>
  )
}

export default BestMenu;