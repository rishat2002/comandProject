import {
  CartesianGrid, Legend, Line, LineChart, XAxis, YAxis, 
} from 'recharts'
import React from 'react'

const defaultData = [
  {
    name: '',
  },
  {
    name: 'пн',
    uv: 0,
  },
  {
    name: 'вт',
    uv: 0,
  },
  {
    name: 'ср',
    uv: 0,
  },
  {
    name: 'чт',
    uv: 100,
  },
  {
    name: 'пт',
    uv: 0,
  },
  {
    name: 'сб',
    uv: 0,
  },
  {
    name: 'вс',
  },

  {
    name: '',
  },
]

type propType = {
  data: Array<any>
}
const SalesChart: React.FC<propType> = ({
  data = defaultData,
}) => {
  return (
    <LineChart width={620} height={210} data={data}>
      <CartesianGrid vertical={false}/>
      <XAxis dataKey="name" axisLine={false} tickLine={false}/>
      <YAxis axisLine={false} tickLine={false}/>
      <Legend/>
      <Line legendType="none" dataKey="uv" stroke="#008B8B" dot={false}/>
    </LineChart>
  )
}

export default SalesChart
