import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Image from 'react-bootstrap/Image'
import ErrorHandle from './ErrorHandle';
export class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      cityNme:'',
      cityDat:{},
      displayD: false,
     
    }
  }

  updateCityName = (e) =>{
    // console.log(e.target.value);
    this.setState({
      cityNme:e.target.value,
    });
  }
  

  getCity=async(e)=>{
    e.preventDefault();
    
    const axiosRes = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.43f046aa6530fabe68fd7b1718facc51&city=${this.state.cityNme}&format=json`);
  
    console.log(axiosRes);
    this.setState({
      cityDat:axiosRes.data[0],
      displayD:true
    });
  
  }

  render(){
    return (

    
      <div>
         
          <ErrorHandle >
          <h1>city Explorer</h1>
          <br></br>
          <Form onSubmit={this.getCity}>
            <Form.Group>
            <Form.Label> City Name </Form.Label>
            <Form.Control onChange={this.updateCityName} type='test'></Form.Control>
            <br></br>
            <Button className="button" variant="danger" type="submit">
            Explore!
          </Button>
            </Form.Group>
            
          </Form><br></br>
          {this.state.displayD && 
            <div>
              <p>
                {this.state.cityDat.display_name}
              </p>
              <p>{this.state.cityDat.lat}</p>
            <p>{this.state.cityDat.lon}</p><br></br>

              <Image src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.state.cityDat.lat},${this.state.cityDat.lon}&zoom=15`} alt='' thumbnail fluid  ></Image>
            </div> 

            
          }

          </ErrorHandle>

          
        </div>
         
    );
  }
    
  
  
}

export default App;
