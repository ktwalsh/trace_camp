import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'


const getPlanets = (page) => {
  return  axios.get(`https://swapi.co/api/planets/?page=${page}`);
}


function App() {
  var planets = []

  const [ planetData, setPlanetData ] = useState([]);
  const [ page, setPage ] = useState(1);
  const [ tableData, setTableData ] = useState([]);

  const parsePlanet = (planet) => {
    return <tr> <td>{planet.name}</td> <td>{planet.population}</td> <td>{planet.rotation_period}</td> <td>{planet.orbital_period}</td> <td>{planet.climate}</td></tr>
  }

  // useEffect(() => {
  //   console.log(planetData.map(parsePlanet))
  //   setTableData(planetData.map(parsePlanet))
  // }, [planetData])

  // useEffect(() => {
  //   getPlanets(1).then(
  //     (response) => {
  //       console.log(response.data.results)
  //       setPlanetData(response.data.results)
  //     })



  
      
  // })


  useEffect(() => {
    console.log(page)
    getPlanets(page).then((response) => setPlanetData(response.data.results.map(parsePlanet)))
  }, [page])

    return (
      <div className="App">
        <input type="number" value={page} onChange = {(e) => setPage(e.target.value)} max="7" />
        <table>
          <tr>
            <th>Planet</th>
            <th>Population</th>
            <th>Rotational Period</th>
            <th>Orbital Period</th>
            <th>Climate</th>
          </tr>          
          {planetData}
        </table>
      </div>
    );
  
}

export default App;
