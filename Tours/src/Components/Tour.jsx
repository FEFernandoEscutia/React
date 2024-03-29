const Tour = ({ id, name, info, image, price, deleteT }) => {
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img"/>
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
       <p>{info}</p>
       <button type="button" className="btn" onClick={()=>deleteT(id)}>delete it </button>
      </div>
    </article>
  );
};
export default Tour;
