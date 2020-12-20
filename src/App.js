import React from "react";
import Labels from "./Composants/Labels";
import Inputs from "./Composants/Inputs";
import Meteo from "./Composants/Meteo";




class App extends React.Component{



  state= {
    temperature:undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error:undefined
  }

  
  getWeather =async (e)  =>{

    e.preventDefault();

    
    const city=e.target.elements.city.value;

    const country=e.target.elements.country.value;

    const api_call=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city} 
    ,${country}&appid=99aabad91e2b0930079e047e18fce7fe&units=metric`)
    
    const data = await api_call.json();
    if (city&&country){try{
    console.log(data);

    
    
    this.setState({
      temperature : data.main.temp,
      city : data.name,
      country : data.sys.country,
      humidity : data.main.humidity,
      description : data.weather[0].description,
      error:""  
      
    })
  }
    catch(err) {
      this.setState({
      temperature : undefined,
      city : undefined,
      country : undefined,
      humidity : undefined,
      description : undefined,
  
      error:"invalid values" })
  }
}
  else{
    this.setState({
      temperature : undefined,
      city : undefined,
      country : undefined,
      humidity : undefined,
      description : undefined,
  
      error:"invalid values" })

  }
  }

  render(){
    return( 
      <div id="root">
        <div className="background">
        <div className="frame">
        <div className="col-xs-4 Labels-container">
        <Labels />
        </div>
        <div className="col-xs-8 form-container">
        <Inputs getWeather={this.getWeather} />
        <Meteo 
        temperature={this.state.temperature} 
        humidity={this.state.humidity}
        city={this.state.city}
        country={this.state.country}
        description={this.state.description}
        error={this.state.error}
       />
        </div>
        </div>
        </div>
    </div>
      

    );
  }
}
export default App;

