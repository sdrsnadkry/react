import React, { Component } from 'react'

import styles from './App.module.css';

import { Cards, Chart, CountryPicker } from './components';

import { fetchData } from './api'

class App extends Component {
    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({
            data: fetchedData
        })

        // console.log(data)
    }

    handleCountryChange = async (country) =>{
        //fetch the data
        const fetchedData = await fetchData(country)

        //set state
        this.setState({
            data: fetchedData,
            country: country
        });

    }


    render() {
        const { data, country } = this.state
        return (
            <div className={styles.container}>
                <Cards
                    data={data}
                />
                <CountryPicker 
                    handleCountryChange={this.handleCountryChange}
                />
                <Chart 
                    data = {data}
                    country={country}
                />
            </div>
        )
    }
}

export default App
