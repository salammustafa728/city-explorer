import React, { Component } from 'react'
import Toast from 'react-bootstrap/Toast';

export class CityData extends Component {
    
    render() {
        return (
            <div style={{ margin: '70px 60px' }}>
          <Toast>
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">{this.props.cityDat.display_name}</strong>
              <small></small>
            </Toast.Header>
            <Toast.Body>{this.props.cityDat.lat} {this.props.cityDat.lon}</Toast.Body>
          </Toast>
            </div>
        )
    }
}

export default CityData

