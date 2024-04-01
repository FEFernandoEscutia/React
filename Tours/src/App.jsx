import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Components/Loading";
import Tours from "./Components/Tours";
const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState();
  const [tours, setTours] = useState([]);

  const deleteST = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      const data = response.data;
      setTours(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <main>
      <button className="btn delete-btn" onClick={()=>setTours([])}>Erase all!</button>
     <Tours tours={tours} deleteST={deleteST}/>
      <button className="btn delete-btn" onClick={fetchData}>Add all!</button>
    </main>
  );
};
export default App;
