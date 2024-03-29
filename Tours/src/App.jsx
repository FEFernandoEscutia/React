import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Components/Loading";
import Tours from "./Components/Tours";
const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, serIsLoading] = useState(false);
  const [tours, setTours] = useState([]);
  const deleteT=(id)=>{
    const newT = tours.filter((tour)=> tour.id !== id)
    setTours(newT)
  }
  const fetchData = async () => {
    serIsLoading(true);
    try {
      const response = await axios.get(url);
      const data = response.data;
      setTours(data);
      serIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  if(isLoading){
    return <Loading/>
  }

  return <main>
    <button className="btn" onClick={fetchData}>Add em all</button>
    <button className="btn" onClick={()=>setTours([])}>Remove em all</button>
    <Tours tours={tours} deleteT={deleteT}/>
  </main>
};
export default App;
