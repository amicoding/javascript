

    // PROBLEM 1 START 

let todoList = [ "do laundry", "pay bills", "walk the dog" ]

// add in the end

  todoList.push("Buy Groceries")
  console.log(todoList);
  
  // add geginning
  
  todoList.unshift("Clean Room")
  console.log(todoList);
  
  
  let item = todoList.pop();
  
  
  console.log(item);
  
  
  let index = todoList.indexOf("Clean Room");
  
  console.log(index);
  
  todoList.shift();
  console.log(todoList);
  
  console.log(todoList.length);
  
      //  PROBLEM 1 END 
      
      
  // PROBLEM 2 START
  
  
  let score = 85;
  
  if (score > 90) {
    console.log("you have got A ");
  }
  
    else if (score > 80 && score < 90) {
      
      console.log("You have got B ");
    }
  
  
    else if (score > 70 && score < 80) {
      
      console.log("You have got C ");
    }
  
  
    else if (score > 60 && score < 70) {
      
      console.log("You have got D ");
    }
  
    else if(score < 60) {
      
      console.log("You have got F . you have faild the examination!!! ");
    }
  
  // PROBLEM 2 END
  
  
    //  PROBLEM 4 START
    
  let colors = [ "red", "green", "blue"]
    
    colors.push("yellow")
    console.log(colors);
    
    colors.shift();
    console.log(colors);
    
    colors.unshift('Purple')
    console.log(colors);
    
    let index1 = colors.indexOf("blue");
    console.log(index1);
    
    delete colors[2]
    console.log(colors);
    console.log(colors.length);
    
    //  PROBLEM 4 END
    
    
  
  // WEATEHER CHECK START 
  
   let temperature = 15;
   let isRaining = true;
   
   if (temperature < 0 ) {
     console.log("Its a very cool day!! Wear heavy jacket");
   }
   
   else if (temperature >= 0 && temperature <= 20 && isRaining === true ) {
     console.log("Its a cool and rainy day. You need to wear raincoat and sweater ");
   }
   
   
   else if (temperature > 20 && isRaining === true ) {
     console.log("Its s sunny day . Wear T-shirt and sunglasses");
   }
   
  else{
    console.log("Wear regular clothes");
  } 
  
  
  // WEATEHER CHECK END
  
  
  
  
  
  
  
  
  