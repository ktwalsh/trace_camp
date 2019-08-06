import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { getAsteroids } from './nasaWorker'
import moment from 'moment';
import { VictoryChart, VictoryTheme, VictoryScatter } from 'victory';


function App() {

  const [ startDate, setStartDate ] = useState(moment().subtract(1, 'week').format("YYYY-MM-DD"));
  const [ endDate, setEndDate ] = useState(moment().format("YYYY-MM-DD"));
  const [ asteroidData, setAsteroidData ] = useState([]);

  const [ graphData, setGraphData ] = useState([]);

  const parseAsteroid = (asteroid) => {
    console.log(asteroid)
    return {x: Number(asteroid.close_approach_data[0].miss_distance.miles), y: asteroid.estimated_diameter.miles.estimated_diameter_max}
  }

  useEffect(() => {
    console.log(asteroidData.map(parseAsteroid))
    setGraphData(asteroidData.map(parseAsteroid))
  }, [asteroidData] )

  useEffect(() => {
    console.log("This is coming from the useEffect: ", startDate, endDate)

    var closeAsteroids= []
    getAsteroids(startDate, endDate).then(
      (response) => {
        console.log(response.data.near_earth_objects)
        Object.entries(response.data.near_earth_objects).forEach((value) => {
          closeAsteroids = closeAsteroids.concat(value[1])
        })
      }).then(() => {
        setAsteroidData(closeAsteroids)
      })

  }, [startDate, endDate] )

const handler = (event) => {
  console.log(event)
}
  return (
    <div className="App">
      Test
      <input value = {startDate.toString()} type="date" id="start" onChange={ (e) => setStartDate(e.target.value) }/>
      <input value = {endDate.toString()} type="date" id="end" onChange={ (e) => setEndDate(e.target.value) }/>
    

    <VictoryChart 
      domain={{ x: [0, 42457944], y: [0, 2] }}
    >
      <VictoryScatter
        style={{ data: { fill: "#c43a31" } }}
        size={2}
        data={graphData}
        />
      </VictoryChart>
    </div>
  );
}


export default App;
