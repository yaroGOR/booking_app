import React from 'react'
import "./chart.scss"
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = ({aspect, title}) => {


   
      const data = [
        {name: "January", total: 1200},
        {name: "February", total: 1500},
        {name: "March", total: 1600},
        {name: "April", total: 1000},
        {name: "May", total: 800},
        {name: "June", total: 1200}
       

      ]

  return (
    <div className='chart'>
        <div className="title">{title}</div>
     <ResponsiveContainer width="100%" aspect = {aspect}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className='chartGrid'/>
          <XAxis dataKey="name" stroke='gray'/>
          <Tooltip />
          <Area type="monotone" dataKey="total" fillOpacity={0.5} stroke="#8884d8" fill="url(#total)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart