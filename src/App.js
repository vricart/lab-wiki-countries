import './App.css';

import React, { useEffect, useState } from "react";
import {Routes, Route} from "react-router-dom"

// import countriesData from './countries.json';

import NavBar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountriesDetails from './components/CountryDetails';

import axios from 'axios'


function App() {

  const [countries, setCountries] = useState([])
  console.log(countries)

useEffect(() => {

  const fetchCountriesApi = async () => {
    try {
      const countriesDataApi = await axios.get(`https://ih-countries-api.herokuapp.com/countries`)
      setCountries(countriesDataApi.data)

    } catch (error) {
      console.log(error)
    }
  }

  fetchCountriesApi()
}, [])


  return (
    <div className="App">
      <NavBar />
      <CountriesList countries={countries}/>

      <Routes>
        <Route path="/:countryCode" element={<CountriesDetails countries={countries} />} />
      </Routes>


    </div>
  );
}

export default App;
