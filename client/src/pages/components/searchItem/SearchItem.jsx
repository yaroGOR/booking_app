import "./searchItem.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const SearchItem = (props) => {
 useEffect(()=> console.log(props), [props])
  const item = props.item
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <Link to={`/hotels/${item._id}`} style={{ textDecoration: 'none' }}>
        <h1 className="siTitle">{item.name}</h1>
        </Link>
        <span className="siDistance">{item.distance}m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
{item.title}        </span>
        <span className="siFeatures">
{item.desc}        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {item.ratings && 
        <div className="siRating">
          <span>Excellent</span>
          <button>{item.ratings}</button>
        </div>
}
        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
