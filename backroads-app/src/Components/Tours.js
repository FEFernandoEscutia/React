import {tours1} from "../data"
import Title from "./Title";
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title1="Featured" subTitle="Tours?" />

      <div className="section-center featured-center">
        {tours1.map((tours) => {
          const { id, img, date, name, text, country, days, price } = tours;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={img} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{name}</h4>
                </div>
                <p>{text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {country}
                  </p>
                  <p>{days}</p>
                  <p>{price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Tours;
