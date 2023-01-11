import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Chart from "../../components/chart/Chart"
import "./single.scss";
import DataTable from "../../components/table/DataTable";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Jane doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <div className="itemValue">janedoe@gmail.com</div>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <div className="itemValue">+380 63 123 45 67</div>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Adress:</span>
                  <div className="itemValue">Kyiv, sev street 98</div>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country: </span>
                  <div className="itemValue">UA</div>
                </div>
                
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title ="User spending (last 6 month"/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last transactions</h1>

          <DataTable/>
        </div>
      </div>
    </div>
  );
};

export default Single;
