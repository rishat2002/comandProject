import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import 'antd/dist/antd.css'
import { useTranslation } from 'react-i18next'
import SalesChart from '../components/Charts/Sales-Chart'
import MoneyChart from '../components/Charts/Money-Chart';

const dataMoney = [
  {
    name: '',
  },
  {
    name: 'Нояб.',
    cost: 0,
    advent: 0,
    surplus: 1,
  },
  {
    name: 'Дек.',
    cost: 0,
    advent: 1,
    surplus: 2,
  },
  {
    name: 'Янв.',
    cost: 0,
    advent: 0,
    surplus: 3,
  },
  {
    name: 'Февр.',
    cost: 2,
    advent: 1,
    surplus: 0,
  },
  {
    name: 'Март',
    cost: 0,
    advent: 0,
    surplus: 1,
  },
  {
    name: 'Апр',
    cost: 0,
    advent: 0,
    surplus: 1,
  },

  {
    name: '',
  },
]

const dataSales = [
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

const App = () => {
  const { t } = useTranslation()
  return (
    <Switch>
      <Route path="/" exact>
        <div>{t`HelloWorldPage.HelloWorld`}</div>
        <SalesChart
          data={dataSales}
        />
        <MoneyChart data={dataMoney}/>
      </Route>
      <Route path="**">
        <Redirect to="/" />
      </Route>
    </Switch>
  )
}

export default App
