import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './component/Navbar';
import Filter from './component/Filter';
import Cards from './component/Cards';

import { filterData, apiUrl } from './data';
import { toast } from 'react-toastify';
import Spinner from './component/Spinner';
function App() {
  const [data, setdata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      setdata(output.data);
    } catch (error) {
      toast.error('somting went wrong!');
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-slate-800">
      {/* {console.log(data)} */}
      <Navbar />
      <Filter
        filterData={filterData}
        category={category}
        setCategory={setCategory}
      ></Filter>

      <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {loading ? (
          <Spinner />
        ) : (
          <Cards category={category} data={data}></Cards>
        )}
      </div>
    </div>
  );
}

export default App;
