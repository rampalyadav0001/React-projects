import "./App.css";
import data from "./data";
import Tour from "./component/Tour";
import { useState } from "react";

function App() {
  const [tours,setTour] = useState(data)
    function removeTour(id){
      const newTour=tours.filter(tour=>tour.id!==id);
      setTour(newTour);
    }
    if(tours.length===0){
      return(
        <div>
          <h1>No Tour Left</h1>
          <button className="refresh btn-white" onClick={()=>setTour(data)}>
            Refresh
          </button>
        </div>
      );

    }
  return (
   <div>
   <Tour tour={tours} removetour={removeTour}></Tour>
   </div>
  );
}

export default App;
