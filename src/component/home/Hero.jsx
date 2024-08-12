import React from 'react'
import { BsFillArchiveFill, BsPeopleFill, BsBellFill,
  BsFillGrid3X3GapFill} from 'react-icons/bs'
import { FaNewspaper } from 'react-icons/fa6';
import { IoIosCodeWorking } from 'react-icons/io';
  import {  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Rectangle } from 'recharts';

const Hero  = () => {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <section className='main-container'>
<div className='main-title'>
 <h3>DASHBOARD</h3>
</div>

<div className="main-cards">
  <div className="card">
    <div className="card-inner">
      <h3>NEWS</h3>
      <FaNewspaper className='card-icon' />
    </div>
    <h1>300</h1>
    </div>

    <div className="card">
    <div className="card-inner">
      <h3>JOBS</h3>
      <IoIosCodeWorking  className='card-icon' />
    </div>
    <h1>400</h1>
  </div>
  
  <div className="card">
    <div className="card-inner">
      <h3>USERS</h3>
      <BsPeopleFill  className='card-icon' />
    </div>
    <h1>200</h1>
  </div>

  <div className="card">
    <div className="card-inner">
      <h3>ALERTS</h3>
      <BsBellFill className='card-icon' />
    </div>
    <h1>30</h1>
  </div>



  
</div>

<div className="charts">
<ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>


<ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
</div>

    </section>
  )
}

export default Hero