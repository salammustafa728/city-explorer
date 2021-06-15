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
      alert:false,
      error:'',
      weatherData:'',
     
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
    const axiosRes = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.43f046aa6530fabe68fd7b1718facc51&city=${this.state.cityNme}&format=json`);
  
    const myApiRes = await axios.get(`${process.env.REACT_APP_URL}/weather-data`)
    console.log(axiosRes);
    this.setState({
      cityDat:axiosRes.data[0],
      weatherData: myApiRes.data.data,
      displayD:true,
      alert:false,
      
    });
    // console.log(weatherD.data.data.[0].weather.description); 
  }  catch(error){
      this.setState({
        error:error.message,
        alert:true,
       
      })
  }
   
  
  }

  render(){
    return (

    
      <div>{this.state.alert &&
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
