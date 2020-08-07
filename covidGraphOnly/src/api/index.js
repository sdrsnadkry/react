import axios from 'axios';

const baseURL = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {

    let changeableURL = baseURL;

    if(country){
        changeableURL = `${baseURL}/countries/${country}`
    }
    try {
        // const { data } } = await axios.get(baseURL);
        //const modifiedData = {
        // confirmed: data.confirmed,
        // recovered: data.recovered,
        // deaths: data.deaths,
        // lastUpdate: data.lastUpdate
        //}

        //************************OR

        //first get data object from axios and desstructure it
        // const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(baseURL);
        // const modifiedData = { confirmed, recovered, deaths, lastUpdate }
        // return modifiedData;
        
        //*****************************OR
        
        //first get data object from axios and desstructure it
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableURL);
        return { confirmed, recovered, deaths, lastUpdate }

    }
    catch (error) {

    }
}

export const fetchDailyData = async () =>{
    try{
        const {data} = await axios.get(`${baseURL}/daily`)

        const modifiedData = data.map((dailyData)=> ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))

        return modifiedData

    }
    catch(error){

    }
}

export const fetchCountries = async () =>{
    try{
        // const response = await axios.get(`${baseURL}/countries`)
        
        const {data: {countries}} = await axios.get(`${baseURL}/countries`)

        // console.log(countries)

        return countries.map((country) =>country.name)

    }
    catch(error){

    }
}