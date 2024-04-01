import { useState } from "react";
import text from "./data";
import { nanoid } from "nanoid";
const App = () => {
  const [count, setCount] = useState(1);
  const [paragraphs, setParagraphs] = useState([]);
  const handleChange = (e) => {
    setCount(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = parseInt(count);
    setParagraphs(text.slice(0, amount));
  };
  const handleRandom=(e)=>{
    e.preventDefault();
    const randomIndex = Math.floor(Math.random() * text.length);
    setParagraphs([text[randomIndex]])
  }
  return (
    <section className="section-center">
      <h4>Tired of boring Lorem Ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="quantity">Paragraphs : </label>
        <input
          type="number"
          name="quantity"
          id="quantity"
          min="1"
          max="8"
          value={count}
          onChange={handleChange}
        />
        <button className="btn" type="submit">
          Generate
        </button>
        <button className="btn" type="submit" onClick={handleRandom}>Surprise me</button>
      </form>
      <article className="lorem-text">
        {paragraphs.map((text) => {
          return <p key={nanoid()}>{text}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
