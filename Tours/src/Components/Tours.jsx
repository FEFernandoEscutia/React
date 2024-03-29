import Tour from "./Tour";

const Tours = ({ tours, deleteT }) => {
  return (
    <section className="title">
        <h2>Our Tours</h2>
        <div className="title-underline"></div>
      <div className="tours">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} deleteT={deleteT} />;
        })}
      </div>
    </section>
  );
};
export default Tours;