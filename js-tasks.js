

// problem 1: find arry sum from function usuing for loop

 let numArray = [12, 34, 5, 49,];
 let arraySum = 0;
 function numFunction(){
   
   for (let i = 0; i < numArray.length; i++) {
     
     arraySum += numArray[i];
   }
   return arraySum
 }
 
 let total =  numFunction();
// console.log("sum of the array number : " + total);
 
// ******************************

  // problem 2: write a function to add new property in Object like city
  
   let person = {
     name: "sakib", 
     age: 23,
   };
   
  let yourKey = "city " ;
  
  let yourValue = "Dhaka "; 
   
   function addKey(key,value){
     
      person.city = value;
      console.log(person);
   }
   
   addKey(yourKey, yourValue)

// ******************************
 
 
 
 
 
 
 
 
 
 