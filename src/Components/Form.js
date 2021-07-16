import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import './Form.css';

export class FormSearch extends Component {
    render() {
        return (
            <div >
                 <Form onSubmit={this.props.getCity} className="form">
            <Form.Group>
            <Form.Label> City Name </Form.Label>
            <Form.Control onChange={this.props.updateCityName} type='test'></Form.Control>
            <br></br>
            <Button className="button" variant="danger" type="submit">
            Explore!
          </Button>
            </Form.Group>
            
          </Form>
            </div>
        )
    }
}

export default FormSearch
