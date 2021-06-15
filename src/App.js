import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormSearch from './Components/Form';
import AlertMess from './Components/Alert';
import Map from './Components/Map';
import CityData from './Components/CityData'
import Weather from './Components/Weather'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      cityNme:'',
      cityDat:{},
      displayD: false,
      lat:'',
      lon:'',
      alert:false,
      error:'',
      weatherData:''
     
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
  try{
    await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.43f046aa6530fabe68fd7b1718facc51&
    city=${this.state.cityNme}&format=json`).then(locatioIqRes=>{

      this.setState({
        cityDat:locatioIqRes.data[0],
        lat:locatioIqRes.data[0].lat,
        lon:locatioIqRes.data[0].lon,
      })
      axios.get(`${process.env.REACT_APP_URL}/weather?lat=${this.state.lat}&lon=${this.state.lon}`).then(weatherReponse=>{
        this.setState({
          weatherData: weatherReponse.data,
          displayD:true,
          alert:false
          
        });
      })
    }); 
  }  catch(error){
      this.setState({
        error:error.message,
        alert:true,
       
      })
  }
   
  
  }

  render(){
    return (

    
      <div style={{margin : 'auto',background:'#E99497'}}>
        {this.state.alert &&
        <AlertMess 
        error={this.state.error}
        />
      }
      <div>
      <FormSearch
          getCity={this.getCity}
          updateCityName={this.updateCityName}
          />

          {(this.state.displayD) && 
            <div>
              <Map
              cityDat={this.state.cityDat}
              />
              <CityData
              cityDat={this.state.cityDat}
              />
               <Weather
            weather={this.state.weatherData}
            />
            </div>
          }
            

      </div>
                   
        </div>
         
    );
  }
    
  
  
}

export default App;
