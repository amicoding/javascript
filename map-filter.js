// map method

console.clear()

let Numbers = [35,30, 54, 33, 35, 53, 35];

  let mapNumbers = Numbers.map( (arr)=>{
   
    return arr+20
  
   
 } )
 
// console.log(mapNumbers);
 
// filter method 

 let filterNumbers = Numbers.filter( (arr2)=>{
  
   if (arr2 % 2!== 0) {
     return arr2
   }
  
} )

console.log(filterNumbers);