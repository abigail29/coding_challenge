import React, { Component } from 'react';
import InputComponent from '../components/InputComponent.js'

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 50,
      error: ''

    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange(event){
    this.setState({ value: event.target.value })  // changing value
  }

  handleSubmit(event){
    event.preventDefault()
    let newValue = parseInt(this.state.value)
    let newDTotal= parseInt(this.props.dTotal)
    console.log(newValue + newDTotal)

    if(newValue + newDTotal > this.props.dGoal){
      this.setState({ error: "This donation exceeds the goal amount! Try a lower donation!"})
    } else{
      this.setState({ error: ''})
      this.props.handleStateChange(this.state.value)  //submitting value
    }
  }



  render(){


    return(
      <div>
      {this.state.error}
      <form onSubmit={this.handleSubmit}>
        <InputComponent
        value = {this.state.value}
        handleChange = {this.handleChange}
        />
        <input type="submit" className="button" value="Give Now "/>
      </form>
      </div>

    )
  }
}



export default FormContainer;
