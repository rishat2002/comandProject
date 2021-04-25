import {
  Bar,
  CartesianGrid, ComposedChart, Legend, Line, LineChart, XAxis, YAxis,
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
const line = {
  legendType: 'none',
  dataKey: 'uv',
  stroke: '#008B8B',
}

const defaultArrLine = [line]

type propType = {
  data: Array<any>
}
const MoneyChart: React.FC<propType> = ({
  data = defaultData,
}) => {
  return (
    <ComposedChart width={530} height={250} data={data}>
      <CartesianGrid vertical={false}/>
      <XAxis dataKey="name" axisLine={false} tickLine={false}/>
      <YAxis axisLine={false} tickLine={false}/>
      <Legend/>
      <Line legendType="circle" dataKey="surplus" stroke="#00BFFF" name="Остаток" dot={false}/>
      <Bar barSize={20} legendType="circle" dataKey="advent" fill="#98FB98" stroke="#32CD32" name="Приход"/>
      <Bar barSize={20} legendType="circle" dataKey="cost" fill="#FA8072" stroke="#DC143C" name="Расход"/>
    </ComposedChart>
  )
};

export default MoneyChart
