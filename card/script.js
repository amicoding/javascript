
fetch('https://fakestoreapi.com/products')

.then(res => res.json())
.then( (res)=>{
  
  
  res.map( (products)=>{
    
    let img = products.image;
    
    let title = products.title;
    
    let des = products.description; 
    
    let price = products.price;
    
    let htmlCode = `
    
     <div>
      <img src="${img}" alt="" />
      <h2>${title}</h2>
      <p>${des}</p>
      <p>Price : ${price}</p>
      </div>
    
    `;
    
  document.getElementById('root').innerHTML += htmlCode;
    
  } )
  
} )