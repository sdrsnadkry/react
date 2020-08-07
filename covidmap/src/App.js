import React, { useState, useEffect } from 'react';
import './App.css';
import {
    FormControl,
    Select,
    MenuItem,
    Card,
    CardContent,
} from '@material-ui/core'

import InfoBox from './InfoBox'
import Map from './Map'
import Table from './Table'
import LineGraph from './LineGraph'

import { sortData, preetyPrintStat } from './util'

import 'leaflet/dist/leaflet.css'

function App() {
    const [countries, setCountries] = useState([])

    const [country, setCountry] = useState('worldwide')

    const [countryInfo, setCountryInfo] = useState({})

    const [tableData, setTableData] = useState([])

    const [mapCenter, setMapCenter] = useState({
        lat: 34.80746, lng: -40.4796
    });
    const [mapZoom, setMapZoom] = useState(3)

    const [mapCountries, setMapCountries] = useState([])

    const [casesType, setCasesType] = useState("cases")


    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/all")
            .then(response => response.json())
            .then(data => {
                setCountryInfo(data)
            })
    }, [])

    useEffect(() => {

        const getCountriesData = async () => {
            await fetch("https://disease.sh/v3/covid-19/countries")
                .then((response) => response.json())
                .then((data) => {
                    //creating your own objects
                    const countries = data.map((country) => ({
                        name: country.country,
                        value: country.countryInfo.iso2
                    }));

                    const sortedData = sortData(data)


                    setTableData(sortedData);
                    setCountries(countries);

                    setMapCountries(data);
                });
        };

        getCountriesData();

    }, [])

    const onCountryChange = async (e) => {

        const countryCode = e.target.value

        const url = countryCode === 'worldwide'
            ? 'https://disease.sh/v3/covid-19/all'
            : `https://disease.sh/v3/covid-19/countries/${countryCode}`

        await fetch(url)
            .then(response => response.json())
            .then(data => {
                setCountry(countryCode)
                setCountryInfo(data)

                setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
                setMapZoom(4);


            });
    };

    console.log("Country info ----", countryInfo)


    return (

        <div className="app">   {/* BEM naming convention */}
            <div className="app__left">
                <div className="app__header">
                    <h1>COVID 19 TRACKER</h1>

                    <FormControl className="app__dropdown">
                        <Select
                            variant="outlined"
                            value={country}
                            onChange={onCountryChange}
                        >
                            <MenuItem value="worldwide">WorldWide</MenuItem>
                            {
                                countries.map((country, i) => (
                                    <MenuItem key={i} value={country.value}>{country.name}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                </div>

                <div className="app__stats">
                    <InfoBox
                        isRed
                        active = {casesType === 'cases'}
                        onClick={e => setCasesType('cases')}
                        title="Coronavirus Cases"
                        total={preetyPrintStat(countryInfo.cases)}
                        cases={preetyPrintStat(countryInfo.todayCases)}
                        />
                    <InfoBox
                        active = {casesType === 'recovered'}
                        onClick={e => setCasesType('recovered')}
                        title="Recovered Cases"
                        total={preetyPrintStat(countryInfo.recovered)}
                        cases={preetyPrintStat(countryInfo.todayRecovered)}
                        />
                    <InfoBox
                        isRed
                        active = {casesType === 'deaths'}
                        onClick={e => setCasesType('deaths')}
                        title="Deaths Cases"
                        total={preetyPrintStat(countryInfo.deaths)}
                        cases={preetyPrintStat(countryInfo.todayDeaths)}
                    />

                </div>

                <Map
                    casesType={casesType}
                    countries={mapCountries}
                    center={mapCenter}
                    zoom={mapZoom}
                />
            </div>
            <Card className="app__right">
                <CardContent>
                    <h3>Live Cases By Countries</h3>
                    <Table countries={tableData}></Table>

                    <h3 className="app__graphTitle">Worldwide new {casesType}</h3>

                    <LineGraph
                        casesType={casesType}
                        className="app__graph"
                    />
                </CardContent>

            </Card>
        </div>
    );
}

export default App;
