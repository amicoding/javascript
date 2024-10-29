

let body = document.getElementById('body');

let sport = document.getElementById('sport')

let head = document.getElementById('head');

const htmlCode = `

   <div>
        <h3>List of Books</h3>
        <ul>
          <li>Book Name 1</li>
          <li>Book Name 2</li>
          <li>Book Name 3</li>
          <li>Book Name 4</li>
          <li>Book Name 5</li>
        </ul>
      </div>
      
      <div>
        <h3>List of Fruits</h3>
        <ul>
          <li>Fruit Name 1</li>
          <li>Fruit Name 2</li>
          <li>Fruit Name 3</li>
          <li>Fruit Name 4</li>
          <li>Fruit Name 5</li>
          <li>Fruit Name 6</li>
          <li>Fruit Name 7</li>
        </ul>
      </div>
      
      <div>
        <h3>List of Books</h3>
        <ul>
          <li>Book Name 1</li>
          <li>Book Name 2</li>
          <li>Book Name 3</li>
          <li>Book Name 4</li>
          <li>Book Name 5</li>
        </ul>
      </div>
      
      
      <div>
        <h3>List of Movies</h3>
        <ul>
          <li>Movies Name 1</li>
          <li>Movies Name 2</li>
          <li>Movies Name 3</li>
          <li>Movies Name 4</li>
          
        </ul>
      </div>
      
      
      <div>
        <h3 id="sport">List of Sports</h3>
        <ul>
          <li>Sports Name 1</li>
          <li>Sports Name 2</li>
          <li>Sports Name 3</li>
          <li>Sports Name 4</li>
          
        </ul>
      </div>

`;


let row1 = document.getElementById('row1');

 row1.innerHTML = htmlCode;