import "./featuredProperties.css";
import useFetch from "../../../hooks/useFetch";
import { useEffect } from "react";
const FeaturedProperties = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:8800/hotels?featured=true&limit=4"
  );

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {Array.isArray(data)
            ? data.map((item, index) => (
                <div className="fpItem" key={index}>
                  <img src={item.photos[0]} alt="" className="fpImg" />
                  <span className="fpName">{item?.name}</span>
                  <span className="fpCity">{item?.city}</span>
                  <span className="fpPrice">
                    Starting from ${item?.cheapestPrice}
                  </span>
                  {item?.rating && (
                    <div className="fpRating">
                      <button>{item?.rating}</button>
                      <span>Excellent</span>
                    </div>
                  )}
                </div>
              ))
            : null}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
