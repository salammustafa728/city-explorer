import React, { Component } from 'react'

import WeatherDay from './WeatherDay';

export class Weather extends Component {
    render() {
      console.log('weather data',this.props);
        return (
            <>
            {
                 this.props.weather.map(value => {
                return (
                 <>
                <WeatherDay
                description={value.description}
                date= {value.date}
                />
                 </>
                )
              })
              }
        </>
        )
    }
}

export default Weather
