import "./featuredProperties.css";
import useFetch from "../../hooks/useFetch";
import SkeletonLoading from "../skeleton/SkeletonLoading";
import { Link } from "react-router-dom";

const FeaturedProperties = () => {
  const { data, loading } = useFetch(
    "/api/hotels?featured=true&limit=4"
  );
    
  return (
    <div className="fp">
      {loading ? (
        <SkeletonLoading/>
      ) : (
        <>
          {Array.isArray(data)
            ? data.map((item, index) => (
                <div className="fpItem" key={index}>
                  <Link to={`/hotels/${item?._id}`}>
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
                  </Link>
                </div>
              ))
            : null}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
