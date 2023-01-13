import { useState, useEffect } from "react";
import axios from "axios";
import defineBackendURL from "../adress";
const useFetch =  (url) => {

  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const proxy = defineBackendURL()
  url = proxy.concat(url)

  const fetchData = async () => {
    await setLoading(true);

   try {
     const res = await axios.get(url);
     await setData(res.data)
     console.log(res)
   } catch (err) {
     setError(err);
   }
   await setLoading(false);
 };

 const reFetch = async () => {
  setLoading(true);
  try {
    const res = await axios.get(url);
    setData(res.data);
    
  } catch (err) {
    setError(err);
  }
  setLoading(false);
};

  useEffect(() => {
    fetchData();

  }, [url]);


  
  return { data, loading, error , reFetch};
};

export default useFetch