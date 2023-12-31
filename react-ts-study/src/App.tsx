import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './components/Store';
import { Address, Restaurant } from './model/restaurant'; // 지정한 타입 불러오기 위함
import BestMenu from './components/BestMenu';


/**
 * 작업 시나리오 -> 레스토랑
 * 
 */

const data:Restaurant = {
  name : '심야식당',
  category:'Japanese',
  address : {
    city : 'Tokyo',
    detail: 'somewhere',
    zipcode: 12377
  },
  menu:[{name:'sushi',price:15000, category: 'SUSHI'}, {name:'ramen',price:5000, category: 'RAMEN'},{name:'sake onigiri', price:1500, category: 'ONIGIRI'} ]
}

const App:React.FC = () => {

  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data); // 제네릭을 이용해서 useState를 사용하는 순간에 타입을 정해주고 싶을때 사용
  // 주소 변경함수
  const changeAddress = (address:Address) => {
    setMyRestaurant({...myRestaurant,address:address})
  }

  // 최고의 음식 이름 보여주기
  const showBestMenuName = (name:string) => {
    return name;
  }

  return (
    <div className="App">
      <Store info={myRestaurant} onChangeAddress={changeAddress} />
      <BestMenu name="GyuDon" category = "GOHAN" onShowBestMenuName={showBestMenuName} />
    </div>
  );
}

export default App;
