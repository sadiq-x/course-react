import React from "react";

//Old version to create components
export default class Test extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message: "Hello World"
        }
    }
  render(){
    
    return(
        <h1>{this.state.message}</h1>
    )
  }  

}