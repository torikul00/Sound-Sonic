import React, { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Legend, Bar } from 'recharts';
import {useNavigate} from 'react-router-dom'
import './Dashborad.css'
const Dashboard = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  return (
    <div>
      <div className="charts">

        <div className='line-chart'>
          <h1 className='sell'> - Monthly Average Sell </h1>
          <LineChart width={500} height={300} data={data}>
            <Line dataKey="sell" stroke="#557b83" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>

        <div className="bar-chart">
          <h1 className='sell'> - Investment VS Revenue</h1>
          <BarChart width={500} height={320} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="investment" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" fill="#557b83" />
          </BarChart>
        </div>

      </div>

      <button onClick={()=>navigate('/home')} className='back-home-button'>Back to home </button>
    </div>
  );
};

export default Dashboard;