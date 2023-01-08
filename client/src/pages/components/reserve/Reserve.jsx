import "./reserve.css";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../../context/SearchContext";

const Reserve = ({ setOpen, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { date } = useContext(SearchContext);
  const navigate = useNavigate()
  const { data, loading, error } = useFetch(
    `http://localhost:8800/hotels/room/${hotelId}`
  );

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());
    let list = [];
    while (date <= end) {
      list.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return list;
  };

  const allDates = getDatesInRange(date[0].startDate, date[0].endDate);
  console.log(allDates);
  console.log(date);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates?.some((date) => {
      allDates.includes(new Date(date).getTime());
    });
    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(
            `http://localhost:8800/rooms/aviability/${roomId}`,
            { dates: allDates }
          );
          console.log(res.data);
          return res.data;
        })
      );
      setOpen(false)
      navigate('/')
      
    } catch (err) {}
  };

  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span> Select your rooms: </span>
        {loading
          ? "Loading"
          : data.map((item, index) => {
              return (
                <div className="rItem" key={index}>
                  <div className="rItemInfo">
                    <div className="rTitle">{item.title}</div>
                    <div className="rDesc">{item.desc}</div>

                    <div className="rMax">
                      Max people:<b>{item.maxPeople}</b>
                    </div>
                    <div className="rPrice">Price: {item.price}</div>
                  </div>
                  <div className="rSelectRooms">
                    {item.roomNumbers.map((roomNumber, index) => {
                      return (
                        <div className="room" key={index}>
                          <label>Room number: {roomNumber.number}</label>
                          <input
                            className="checkBox"
                            type="checkbox"
                            value={roomNumber._id}
                            onChange={handleSelect}
                            disabled={!isAvailable(roomNumber)}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        <button className="rButton" onClick={handleClick}>
          Reserve Now
        </button>
      </div>
    </div>
  );
};

export default Reserve;
