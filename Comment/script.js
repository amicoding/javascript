
let input = document.getElementById('input');

let btn = document.getElementById('btn')


let root = document.getElementById('root1');

function htmlCode(info){
 
   let code = `

     <p>${info}</p>

`;
 
 return code;
 
 
}
 
btn.addEventListener("click", ()=>{
  
  
  let data = input.value;
  
 let code = htmlCode(data);
  root1.innerHTML += code;
  
  
} )
