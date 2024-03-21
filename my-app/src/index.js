import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/reset.css";
import "./Styles/index.css";
import { Book } from "./book.js";
import { books } from "./books.js";

const BoockList = () => {
  //?Este componente es el que se va a renderizar
  //*Elementos que se van a colocar
  const getBook = (id) => {
    const foundBook = books.find((book) => book.id === id);
    console.log(foundBook);
  };
  return (
    <>
      <header>
        <h1 className="Title">My favorite books</h1>
      </header>

      <section className="booklist">
        {books.map((book, index) => {
          return (
            <Book
              key={book.id}
              {...book}
              getBook={getBook}
              number={index + 1}
            /> //?books.id es el id de cada libro, y el ...book es para pasarle todos los elementos del objeto book
          );
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BoockList />); //?Aqui se esta renderizando el componente BoockList en el "root"
