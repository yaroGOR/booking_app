import "./header.css";
import {
  faBed,
  faPerson,
  faCalendarDays,
  faTaxi,
  faCar,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import {  useState } from "react";
import { useNavigate } from 'react-router-dom'

function Header({listMode}) {
  const [destination, setDestination] = useState('')
  const [options, setOptions] = useState({ adult: 1, children: 0, room: 1, });
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const navigate = useNavigate()
  const handleOption = (name, type) => {
    setOptions( (prev) => {return {
        ...prev, 
        [name] : type ==="+" ? options[name] +1 : options[name] -1,
    }})
  }
  const handleSearch = () => {
    navigate("/hotels", {state: {destination , date, options}})
  }
  

  return (
    <div className="header">
      <div className={listMode === true ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        { !listMode && <>
        <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
        <p className="headerDesc">
          Get rewarded for your travels – unlock instant savings of 10% or more
          with a free Lamabooking account
        </p>
        <button className="headerBtn">Sign in / Register</button>

        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
              onChange={(e)=>{setDestination(e.target.value)}}
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span
              onClick={()=>setOpenDate((prev) => !prev)}
              className="headerSearchText"
            >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
                minDate = {new Date()}
              />
            )}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span className="headerSearchText" onClick={()=>{setOpenOptions((prev)=>!prev)}}>{`${options.adult} adult ${options.children} children ${options.room} room`}</span>

            { openOptions && 
            <div className="options">
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                  <button className="optionCounterButton" onClick={()=>handleOption("adult", "-")} disabled={options.adult<=1}>-</button>
                  <span className="optionCounterNumber">{options.adult}</span>
                  <button className="optionCounterButton" onClick={()=>handleOption("adult", "+")}>+</button>
                </div>
              </div>

              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                  <button className="optionCounterButton" onClick={()=>handleOption("children", "-")} disabled={options.children<=0}>-</button>
                  <span className="optionCounterNumber">{options.children}</span>
                  <button className="optionCounterButton" onClick={()=>handleOption("children", "+")}>+</button>
                </div>
              </div>

              <div className="optionItem">
                <span className="optionText">Room</span>
                <div className="optionCounter">
                  <button className="optionCounterButton" onClick={()=>handleOption("room", "-")} disabled={options.room<=1}>-</button>
                  <span className="optionCounterNumber">{options.room}</span>
                  <button className="optionCounterButton" onClick={()=>handleOption("room", "+")}>+</button>
                </div>
              </div>
            </div>
}
          </div>
          <div className="headerSearchItem">
            <button onClick = {()=>handleSearch()} className="headerBtn">Search</button>
          </div>
        </div>
        </>}
      </div>
    </div>
  );
}

export default Header;
