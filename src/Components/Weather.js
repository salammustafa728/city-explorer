import React, { Component } from 'react'

export class Weather extends Component {
    render() {
        return (
            <>
            {
                 this.props.weatherData.map(value => {
                return (
                  <>
                    {value.Weather.description},
                  </>
                )
              })
              }
        </>
        )
    }
}

export default Weather
