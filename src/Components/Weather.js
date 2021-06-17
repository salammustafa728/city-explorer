import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

export class Weather extends Component {
    render() {
      console.log('weather data',this.props);
        return (
            <>
            {
                 this.props.weather.map(value => {
                return (
                 <>
                
                  <ListGroup  style={{ width: "30%" , margin: '50px 60px' , textAlign: 'center'}}>
                    {value.description}
                  </ListGroup>
                   <ListGroup  style={{ width: "30%" , margin: '20px 60px' , textAlign: 'center'}}>
                   {value.date}
                 </ListGroup>
                 </>
                )
              })
              }
        </>
        )
    }
}

export default Weather
