import { useEffect, useState } from "react";
import axios from "axios";
import Loading from './Components/Loading'
import Tours from "./Components/Tours";
const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState([]);
  const deleteT = (id) =>{
    const newTours = tours.filter((tour)=> tour.id !== id)
    setTours(newTours)
  }
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
  if (isLoading){
    return <div>
      <Loading/>
    </div>
  }
  return <main>
    <button onClick={fetchData} className="btn">set em all</button>
    <Tours tours ={tours} deleteT={deleteT} />
    </main>
};
export default App;
