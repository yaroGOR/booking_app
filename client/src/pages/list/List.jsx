import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import { format } from "date-fns";

import "./list.css";
import { DateRange } from "react-date-range";
import SearchItem from "../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";


function List() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);



  const { data, loading, error, reFetch } = useFetch(`/hotels?city=${destination}&min=${min || 0}&max=${max|| 100000}&limit=5`)

  const handleClick = () => {
    reFetch()
  }

  return (
    <div>
      <Navbar />
      <Header listMode={true} />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>

            <div className="listItem">
              <label> Destination </label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="listItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate((prev) => !prev)}>{`${format(
                date[0].startDate,
                "dd/MM/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="listItem">
              <label>Options</label>
              <div className="listOptions">
                <div className="listOptionItem">
                  Min price <small> per night </small>
                  <input onChange={e=>setMin(e.target.value)} type="number" className="listOptionInput" />
                </div>
                <div className="listOptionItem">
                  Max price <small> per night </small>
                  <input onChange={e=>setMax(e.target.value)} type="number" className="listOptionInput" />
                </div>
                <div className="listOptionItem">
                  Adult
                  <input
                    type="number"
                    className="listOptionInput"
                    placeholder={options.adult}
                    min={1}
                  />
                </div>
                <div className="listOptionItem">
                  Children
                  <input
                    type="number"
                    className="listOptionInput"
                    placeholder={options.children}
                    min={0}
                  />
                </div>
                <div className="listOptionItem">
                  Romm
                  <input
                    type="number"
                    className="listOptionInput"
                    placeholder={options.room}
                    min={1}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="listResult">
            {loading ? "loading" : <>
            {Array.isArray(data) ? 
            data.map((item, index) => {
              return (
              <SearchItem key={index} item={item}/>
              )
            }
            ) : null}
            
            
            </>}
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
