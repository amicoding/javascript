

// PROBLEM 1 START
    // print 1 to 50
    
    for (let i = 1; i <= 50; i++) {
       console.log(i);
    }

// PROBLEM 1 END

//*******************************
// PROBLEM 2 START

  // PRINT 33 TO 1
  
  for (let i = 33; i >= 1; i--) {
       console.log(i);
    }

// PROBLEM 2 END 

//*******************************

  // PROBLEM 3 START
  
  let sum = 0;
   
   for (let i = 1; i <= 6; i++) {
      
      if (i%2===0) {
        
        sum = sum + i;
      }
    }
   console.log(sum);
  // PROBLEM 3 END 
  
//*******************************
   // PROBLEM 4 START
  
  let summation = 0;
   
   for (let i = 1; i <=3; i+=2) {
      summation = i*i+summation;
   }
   console.log(summation);
  // PROBLEM 4 END
  
//*******************************

// PROBLEM 5 START

  for (let i = 7; i <= 70; i+=7) {
     console.log(i);
  }
  
// PROBLEM 5 END
  
//*******************************
 
// PROBLEM 6 START
  
  let numbers = 139586883;
  let digit = numbers.toString().length
  console.log(digit);
// PROBLEM 6 END
//*******************************