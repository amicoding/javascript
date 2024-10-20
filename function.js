
// ******************************
   // problem 1 : a function can takes to value in parameters and return sum 
   
   let sum;
   function addNumbers(a, b){
     
    sum = a + b;
     return sum;
   }
   
  addNumbers(120, 20); // input number
  // console.log(sum);
  
// ******************************
   
  // problem 2; by usuing loop sum up to 1 to n
  let sum2 = 0;
  
  function sumUpToN(n){
    
    for (let i = 1; i <= n ; i++) {
      
      sum2 = sum2 + i;
      
    }
    // return sum2;
  }
    
    sumUpToN(4) // input number
    // console.log(sum2);

// ******************************
   
  // problem 3: finding the sum of array value
  
  let array = [2, 4, 6, 8, 10, 12];
    
    let sumArrayValue = 0;
   function sumArray(arr){
     for (let i = 0; i < arr.length; i++) {
       
       sumArrayValue += arr[i];
       
     }
     
   }
   
   sumArray(array);
  // console.log(sumArrayValue);
   
// ******************************
   
  // problem 4: count even number in an array 
  
  let numberArray = [2, 30, 4, 7, 6, 8, 11, 23, 24, 53, 60];
  
  let totalEven;
  
  function countEvenNumbers(arr2){
    
    for (let i = 0; i < arr2.length; i++) {
      
      if (arr2[i]%2===0) {
        
        totalEven = arr2[i];
        // console.log(arr2[i]);
        
        
      }
    }
    
    
  }
  // console.log(totalEven);
  
countEvenNumbers(numberArray);

// ******************************
  // problem 5: a function can take a String and can return String length 
   
   function StringLength(info){
    
     let textLength = info.length;
     
    return textLength;
     
     
   }
   
   const text = "this text will go in the function as info and the function return the text length. Thank you so much!!";
   
    let length = StringLength(text);
   
   console.log("Total length of this text with white space " + length);
   
   
// ******************************
