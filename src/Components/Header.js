import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Navbar'
import './Header.css'
export class Header extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Img variant="top" className="parallax-wrapper hero.parallax-content" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/sterling-davis-4iXagiKXn3Y-unsplash-min.jpg" />
                    <Card.Body>
                        <Card.Text className="cityName">
                           City Explore
                        </Card.Text>
                    </Card.Body>
                </Card>
            {/* .parallax-wrapper
  .hero.parallax-content
    img(
      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/sterling-davis-4iXagiKXn3Y-unsplash-min.jpg",
      alt="Photo of city during a sunset by Sterling Davis"
    )
    .hero__title
      h1 CSS Parallax Hero
      p Photo by Sterling Davis on <a href="https://unsplash.com/photos/4iXagiKXn3Y" target="_blank">Unsplash</a>
  .main-content
    .scroll-icon-container
      svg.icon--down-arrow(viewBox="0 0 24 24")
        path(
          d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z"
        )
     */}
            </div>
        )
    }
}

export default Header