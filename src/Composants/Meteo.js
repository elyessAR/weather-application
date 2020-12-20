import React from "react";

class Meteo extends React.Component {
    render(){
        return(
            <div className="weather__info">
                {this.props.city&&<p>City:{this.props.city}</p>}
                {this.props.country&&<p>Country :{this.props.country}</p>}
                {this.props.description&&<p>Description:{this.props.description}</p>}
                {this.props.temperature&&<p>Temperature in C°:{this.props.temperature}</p>}
                {this.props.humidity&&<p>Humidity:{this.props.humidity}</p>}
                {this.props.error&&<p>{this.props.error}</p>}
                
                

               </div>
        
        );

    }
};

export default Meteo;
