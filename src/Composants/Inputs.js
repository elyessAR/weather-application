import React from "react";

class Inputs extends React.Component {
    render(){
        return(
            <form onSubmit ={this.props.getWeather}>

                <p><input type="text" name="city"  placeholder="City..."/></p>
                <p><input type="text" name="country"  placeholder="Country..."/></p> 
                 <button>Entrer</button>

                </form>
        
        );

    }
};
  
export default Inputs;
