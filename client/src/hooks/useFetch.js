import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {

  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
       await setLoading(true);
      try {
        const res = await  axios.get(url);
        await setData(res.data);
      } catch (err) {
        setError(err);
      }
      await setLoading(false);
    };

    fetchData();
  }, [url]);
  useEffect(()=>{console.log(data)}, [loading])

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

  return { data, loading, error , reFetch};
};

export default useFetch