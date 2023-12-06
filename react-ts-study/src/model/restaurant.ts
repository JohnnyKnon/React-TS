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
    zipcode?:number; // ?는 zipcode가 있어도 그만 없어도 그만이지만 사용할때 주의해야됨, 만약 불러올때는 반드시 필요한 경우에 못불러올 수 도 있음
}


// 메뉴타입
export type Menu = {
    name:string;
    price:number;
    category:string;
}

// Type중에서 원하는것만 선택해오기
export type RestaurantOnlyCategory = Pick<Restaurant,'category'>;

// 제네릭 T : <T> 는 data에 들어오는 값을 제대로 모를때, T를 사용해서 함수의 매개변수 처럼 타입을 필요할때마다 넣어서 사용할 수 있다. 
export type ApiResponse<T> = {
    data:T[];
    totalPage:number;
    page:number;
}
// 레스토랑 응답
export type RestaurantResponse = ApiResponse<Restaurant>;
// 메뉴 응답
export type MenuResponse = ApiResponse<Menu>;