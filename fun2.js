
// problem 1: compare string is equal or unequal?

let str1 = "it is";
let str2 = "IT IS";

function comparString(a , b){
  
  if (a.toLowerCase()===b.toLowerCase()) {
    return true
  }
  
  else {
    return false
  }
}

const sendStr = comparString(str1, str2);

console.log(sendStr);

// ******************************
   
  // problem 2: a function can cheak and find word in a sentence
  
  let sentence = "there are more programming language in our modern world. such c++, python, java, javascript etc";
   
   function findWord(text){
     
    return text.includes("javascript"); 
    
    // search here !!
     
   }
   
  let yourWord = findWord(sentence);
  
  console.log(yourWord);
   
// ******************************
   
  // problem 3: split method. simple sentence to array and array to sentence
  
  let text1 = "it is a sample text. here i use split method. after using this method text convert into array.";
  
   function textArrayConverter(text){
     
     let textToArray = text.split(" ");
     
     let arrayToText = textToArray.join("-");
     
      return textToArray + " == " + arrayToText;
     
   }
   
   let converter =  textArrayConverter(text1);
  console.log(converter);
   
// ******************************
   
  // problem 4: a function return slice part of a sentence
  
  let text2 ="a function will take text and two index Number by 3 parameter. then the function return the slice part of the text";
  
  // console.log(text2.slice(0,7));
  
  function sliceText(txt, in1, in2){
    
    return txt.slice(in1, in2);
    
  }
   
  let part = sliceText(text2, 0, 30)
  // give yor input 
  
  console.log(" your slice part : " +  part);
// ******************************
   
  // problem 5: destructuring property from Object
  
  const person = {
    
    name : 'tariq',
    email : 'tariq@gmail.com',
    age : 22,
  };
   
   let{name, age, email} = person;
   
   console.log('His name is ' + name + '.' + ' He is ' + age + ' years old, ' + 'His email address is : ' + email);
   
// ******************************