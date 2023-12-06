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
export type Restaurant = {
    name:string;
    category:string;
    address:{
        city:string;
        detail:string;
        zipcode:number;
    };
    menu:{
        name:string;
        price:number;
        category:string;
    }[];
}