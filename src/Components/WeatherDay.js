import React, { Component } from 'react'

import Card from 'react-bootstrap/Card'

export class WeatherDay extends Component {
    render() {
        return (
            <Card
            className='weather'
                bg="dark"
                text="light"
                style={{ width: '18rem' , margin: "21px" }}
            >
                <Card.Header style={{marginLeft:'10px'}}>Weather Day</Card.Header>
                <Card.Body >
                    <Card.Title style={{marginLeft:'30px'}}>{this.props.description}</Card.Title>
                    <Card.Text style={{marginLeft:'30px'}}>
                        {this.props.date}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default WeatherDay