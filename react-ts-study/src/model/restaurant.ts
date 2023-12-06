// const data = {
//     name : '심야식당',
//     category:'Japanese',
//     address : {
//       city : 'Tokyo',
//       detail: 'somewhere',
//       zipcode: 12377
//     },
//     menu:[{name:'sushi',price:15000, category: 'SUSHI'}, {name:'ramen',price:5000, category: 'RAMEN'},{name:'sake onigiri', price:1500, category: 'ONIGIRI'} ]
//   }
  
// 타입은 interface or type 으로 작업 가능 Syntax랑 방식이 조금 다름

// 레스토랑 기본 데이터 타입
export type Restaurant = {
    name:string;
    category:string;
    address:Address;
    menu:Menu[];
}

// 주소 타입
export type Address = {
    city:string;
    detail:string;
    zipcode:number;
}

// Zipcode 없는 타입 만들기 (type 키워드의 장점) Omit 을 통해서 제외시킬 수 있음
export type AddressWithoutZipcode = Omit<Address,'zipcode'>;

// 메뉴타입
export type Menu = {
    name:string;
    price:number;
    category:string;
}

// Type중에서 원하는것만 선택해오기
export type RestaurantOnlyCategory = Pick<Restaurant,'category'>;