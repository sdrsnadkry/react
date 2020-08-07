import React from 'react'

import numeral from 'numeral'


import { Circle, Popup } from 'react-leaflet'

const casesTypeColors = {
    cases: {
        hex: "#cc1034",
        multiplier: 500,
    },
    recovered: {
        hex: "#7dd71d",
        multiplier: 1000,
    },
    deaths: {
        hex: "#fb4443",
        multiplier: 1500,
    }
}

export const sortData = (data) => {
    const sortedData = [...data];

    sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));

    return sortedData;
}

export const showDataOnMap = (data, casesType = 'cases') => (
    data.map(country => (
        <Circle
            center={[country.countryInfo.lat, country.countryInfo.long]}
            fillOpacity={0.4}
            color={casesTypeColors[casesType].hex}
            fillColor={casesTypeColors[casesType].hex}
            radius={
                Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
            }
        >
            <Popup>
                <div className="info-container">
                    <div
                        className="info-flag"
                        style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
                    />
                    <div className="info-name" style={{ fontWeight: "1000" }}>{country.country}</div>
                    <div className="info-confirmed" style={{ color: 'blue', fontWeight: "600" }}>Cases: {numeral(country.cases).format("0,0")}</div>
                    <div className="info-recovered" style={{ color: 'green', fontWeight: "600" }}>Recovered: {numeral(country.recovered).format("0,0")}</div>
                    <div className="info-deaths" style={{ color: 'red', fontWeight: "600" }}>Deaths: {numeral(country.deaths).format("0,0")}</div>
                </div>
            </Popup>
        </Circle>
    ))
);

export const preetyPrintStat = (stat) => (
    stat ? `+${numeral(stat).format("0.0a")}` : `No Cases`
)