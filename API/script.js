
// fetch('https://fakestoreapi.com/products')
// .then(res =>res.json())
// .then( (res)=>{
  
//   console.log(res);
  
// } )

// image, title, description, price

async function loadApi(){
  
  let res = await fetch('https://fakestoreapi.com/products')
  
  let data = await res.json();
  
  for(let value of data){
    
    
  }
    
}

loadApi();














