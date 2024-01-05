

import React from 'react'
import search_icon from '../src/components/Assets/search.png'
import WeatherApp from './components/Weather App/WeatherApp'
import wind from '../src/components/Assets/wind.png'

function App() { 
  return (
    <div>
      <WeatherApp/>
      <img src={search_icon} alt=""/>
    </div>
  )
}

export default App
