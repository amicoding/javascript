

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
     
      person.key = value;
      // console.log(person);
   }
   
   addKey(yourKey, yourValue)

// ******************************

  // problem 3: a function can retrun even and odd number
   
   let userNumber = 122;
   
   function cheackNumber(){
     
     if (userNumber%2 === 0) {
       
      // console.log("You enter an even number!! ");
       
     }
     else{
      // console.log("Your number is odd!!");
     }
   }
   
   cheackNumber()
// ******************************

  // problem 4: a function can uptdate the model of the car
  
  let car = {
    name : "Toyota Corolla",
    model : "Corolla Le",
    price : 5000
  };
  
  let carModel = " Corolla uptdated"; 
  // input your uptdated model 
  
  function carInfoUpdate(mod){
   
   car.model = mod;
  // console.log(car);
  }
  
  carInfoUpdate(carModel)
  
// ******************************
   
  // problem 5: a function can print Object property and value;
   
   let product = {
     
     name : 'Pendrive',
     price : '1950tk',
     color : 'black',
     qt : 400, 
   };
   
   function productInfo(){
     
     for(key in product){
       
      // console.log(key + " : "+ product[key] );
       
     }
     
   }
   
   productInfo();
   
// ******************************