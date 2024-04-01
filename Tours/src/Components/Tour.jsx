import { useState } from "react";

const Tour = ({ id, name, info, image, price, deleteST }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">{price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{readMore ? info : `${info.substring(0, 200)}...`}</p>
        <button
          type="button"
          className="info-btn"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? "Read Less" : "Read More"}
        </button>
        <button
          className="btn delete-btn btn-block"
          type="button"
          onClick={() => deleteST(id)}
        >
          Take it off!!
        </button>
      </div>
    </article>
  );
};
export default Tour;
