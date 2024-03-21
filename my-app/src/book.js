//*Que contienen los elementos que se van a poner y como estan acomodados
//!En React, cuando pasas una función como prop a un componente, 
//!si necesitas pasar argumentos adicionales a esa función al momento de llamarla, 
//!debes envolver la llamada de la función en una función anónima, como se hace en tu ejemplo.
//?En este componente se esta pasando el metodo getBook como props al componente Book
export const Book = ({ number, title, author, img, getBook, id }) => { //?En estalinea estoy desestructurando los porps
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>     
      <span className="number">{`# ${number}`}</span>                    
      <button className="Button" onClick={()=>getBook(id)}>Click me!</button>   {/* Aqui se esta pasando el id del libro al metodo getBook que esta en el componente BoockList */}
    </article>
  );
};