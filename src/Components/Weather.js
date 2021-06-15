import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

export class Weather extends Component {
    render() {
        return (
            <>
            {
                 this.props.weatherData.map(value => {
                return (
                  <ListGroup  style={{ width: "30%" , margin: 'Auto' , textAlign: 'center'}}>
                    {value.Weather.description}
                  </ListGroup>
                )
              })
              }
        </>
        )
    }
}

export default Weather
