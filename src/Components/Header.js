import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Navbar'
import './Header.css'
export class Header extends Component {
    render() {
        return (
            <div>
                <Card style={{position:'relative'}}>
                    <Card.Img variant="top" className="parallax-wrapper hero.parallax-content" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/sterling-davis-4iXagiKXn3Y-unsplash-min.jpg" />
                    <Card.Body>
                        <Card.Text className="cityName">
                           City Explore
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Header