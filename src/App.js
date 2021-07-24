import './App.css';
import axios from 'axios';
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormSearch from './Components/Form';
import AlertMess from './Components/Alert';
import Map from './Components/Map';
import CityData from './Components/CityData'
import Weather from './Components/Weather'
import Movie from './Components/Movie';
import Footer from './Components/Footer'
import Header from './Components/Header';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityNme: '',
      cityDat: {},
      displayD: false,
      lat: '',
      lon: '',
      alert: false,
      error: '',
      weatherData: '',
      movieData: ''

    }
  }

  updateCityName = (e) => {
    // console.log(e.target.value);
    this.setState({
      cityNme: e.target.value,

    });
  }


  getCity = async (e) => {
    e.preventDefault();
    try {
      await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.43f046aa6530fabe68fd7b1718facc51&
    city=${this.state.cityNme}&format=json`).then(locatioIqRes => {

        this.setState({
          cityDat: locatioIqRes.data[0],
          lat: locatioIqRes.data[0].lat,
          lon: locatioIqRes.data[0].lon,
        })
        axios.get(`${process.env.REACT_APP_URL}/weather?lat=${this.state.lat}&lon=${this.state.lon}`).then(weatherReponse => {
          this.setState({
            weatherData: weatherReponse.data,
            alert: false
          })
          console.log('weatherData', weatherReponse.data);
          console.log('cityname', this.state.cityNme);
          axios.get(`${process.env.REACT_APP_URL}/movies?query=${this.state.cityNme}`)
            .then(movieRes => {
              console.log('movieRes', movieRes);
              this.setState({
                movieData: movieRes.data,
                displayD: true
              })
              console.log('movieRes', movieRes.data);
            }).catch(error => alert(error.message))


        })

      });
    } catch (error) {
      this.setState({
        error: error.message,
        alert: true,

      })
    }


  }





  render() {
    return (

      <div>
        <Header/>
         <div style={{ margin: 'auto' }}>
        {this.state.alert &&
          <AlertMess
            error={this.state.error}
          />
        }
        <div>
          <FormSearch 
            getCity={this.getCity}
            updateCityName={this.updateCityName}
            gitMovie={this.gitMovie}
          />

          {(this.state.displayD) &&
            <div >
             
            
              {/*  Weather Data  */}
              <div  style={{ display: 'flex', flexWrap: 'wrap' }}>
                <Weather
                  weather={this.state.weatherData}
                />
              </div>

              {/* movie Data */}
              <div >
                <Movie
                  movieData={this.state.movieData}
                />
              </div>
              <div style={{display:'flex',flexWrap:'wrap'}}>
                 {/*  City Data  */}
              <CityData
                cityDat={this.state.cityDat}
              />
               {/*  The Map  */}
               <Map
                cityDat={this.state.cityDat}
              />
              </div>
            </div>
          }
        </div>
       
      </div>
      <Footer />
      </div>
     

    );
  }



}

export default App;
