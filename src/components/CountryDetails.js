import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import axios from 'axios'

function CountriesDetails() {

    const { countryCode } = useParams()

    const [selectedCountry, setSelectedCountry] = useState(null)

    useEffect (() => {
        const fetchCountriesApi = async () => {
            try {
                const countriesDataApi = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryCode}`)
                setSelectedCountry(countriesDataApi.data)

            } catch (error) {
                console.log(error)
            }
        }
        fetchCountriesApi()
                
    }, [countryCode])


    return (
        <div>
            {selectedCountry && (
               <h3>{selectedCountry.name.common}</h3>
               <h3>{selectedCountry.name.common}</h3>
            )}
        </div>

    )
}

export default CountriesDetails;