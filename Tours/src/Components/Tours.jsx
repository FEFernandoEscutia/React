import Tour from "./Tour"

const Tours = ({tours, deleteST}) => {
  return <section>
    <div className="title">
      <h1>Our tours {tours.length}</h1>
      <div className="title-underline"></div>
    </div>
    <div className="tours">
      {tours.map((tour)=>{
        return <Tour key={tour.id} {...tour} deleteST={deleteST} />
      })}
    </div>
  </section>
}
export default Tours