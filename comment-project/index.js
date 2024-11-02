
let input = document.getElementById('input');

let btn = document.getElementById('btn');

let root = document.getElementById('root');

  btn.addEventListener("click", ()=>{
   
    let userInput = input.value;
    root.innerText += userInput;
   if (input.value === '') {
     alert('write your comment!!')
     
   }
   
  // location.reload();
  
   
 } )

