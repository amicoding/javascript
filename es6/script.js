

// problem 1 

 
 function fun1(){
   
   var name = 'rafiq';
   let age = 25;
   const roll = 10;
   
   var name = 'karim' // working
  // let age = 20; // error: already have decleread
  // const roll = 5;
  // console.log(roll);
 }
 
 
 fun1()
 
 
// problem 2

  function greet( name, greeting = 'hello'){
    
    // console.log(greeting + name);
    
  }


greet(' rana', 'how are you')

// problem 3

 
 
 function tempStr(firstName, lastName, age){
   
 let info = `
 
  My name is ${firstName} ${lastName}. I am ${age} years old.
 
 `;
 
  return info;
   
 }
 
// console.log(tempStr('Shihab', 'Molla', 20));


// problem 4;

 
 let add = (a, b)=> a+b;

// console.log(add(20,30));


// problem 5

 
// console.log(Math.max(12,34,545,54));
 
 
 let NumberArray = [23, 35, 345, 445]
 let Numbers = (arrNumber)=>{
   
    console.log(Math.max(...arrNumber));
   
 };

// Numbers(NumberArray)