import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/reset.css";
import "./Styles/index.css";

const books = [
  {
    tilte: "Fire & Blood: 300 Years Before A Game of Thrones",
    author: "George R.R. Martin",
    img: "https://m.media-amazon.com/images/I/91kXkSMY2OL._SL1500_.jpg",
    id: 1,//?Este id es para que react no se confunda con los elementos
  },
  {
    tilte:
      "Game of Thrones: House of the Dragon: Inside the Creation of a Targaryen Dynastyt",
    author: "George R.R. Martin",
    img: "https://m.media-amazon.com/images/I/81WS74aySpL._SL1500_.jpg",
    id: 2, //?Este id es para que react no se confunda con los elementos
  },
];

const BoockList = () => {
  //*Elementos que se van a colocar
  return ( 
    <section className="booklist">
     {books.map((book)=>{
      return(
        <Book key={book.id} {...book} /> //?books.id es el id de cada libro, y el ...book es para pasarle todos los elementos del objeto book
      )
     })}
    </section>
  );
};

//*Que contienen los elementos que se van a poner y como estan acomodados
const Book = ({ tilte, author, img}) => {  //?En estalinea estoy desestructurando los porps
  return ( 
    <article className="book">
      <img src={img} alt={tilte} />
      <h2>{tilte}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BoockList />); //?Aqui se esta renderizando el componente BoockList en el "root"
 