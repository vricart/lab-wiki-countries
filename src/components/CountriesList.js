// import { useEffect, useState } from "react";
import { Link } from "react-router-dom"


function CountriesList (props) {

    const { countries }  = props

    // const [countries, setCountries] = useState([])

    // useEffect(() => {
    //     setCountries(props.countries)
    // }, [])


    return (
        <div>
            <div className="list-group">
            {countries && countries.map (country => {
                return (
                    <div key={country.alpha3Code}>
                        <Link to={`/${country.alpha3Code}`}>{country.alpha3Code}</Link>
                        <h3>{country.name.common}</h3>
                    </div>
                )
            })} 
                
            </div>
        </div>
    )
}

export default CountriesList;


