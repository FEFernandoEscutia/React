import Tour from "./Tour"

const Tours = ({tours, deleteT}) => {
    
  return (
    <section >
       <div className="title">
        <h2>our tours</h2>
        <div className="title-underline"></div>
       </div>
       <div>
        <div className="tours">
            {tours.map((tour)=>{
                return <div key={tour.id}>
                    <Tour  {...tour} deleteT={deleteT}/>
                </div>
            })}
           
        </div>
       </div>
    </section>
  )
}
export default Tours