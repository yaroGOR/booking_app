import React from 'react'
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import DataTable from '../../components/table/DataTable'
import Widget from '../../components/widget/Widget'
import "./home.scss"



const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">    
        <Navbar/>
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earnings"/>
          <Widget type="balance"/>
          </div>
          <div className="chartsContainer">
            <Featured/>
            <Chart aspect={2/1} title = "Revenue (last 6 month)"/>
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest transactions</div>
            <DataTable/>
          </div>
</div>
    </div>
  )
}

export default Home