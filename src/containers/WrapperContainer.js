import React, { Component } from 'react';
import FormContainer from './FormContainer'
import ProgressComponent from '../components/ProgressComponent'

class WrapperContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dTotal: 600,
      dGoal: 1000,
      totalCon: 42,
      daysLeft: 10,
      submitted: false
    }
    this.handleStateChange = this.handleStateChange.bind(this)
  }

  handleStateChange(value){
    let newValue = (parseInt(this.state.dTotal) + parseInt(value))
    this.setState({
      dTotal: newValue,
      totalCon: this.state.totalCon + 1,
      submitted: true
     })
  }

  render(){

    let dPercentage= (parseInt(this.state.dTotal) / parseInt(this.state.dGoal)) * 100
    let dLeft = parseInt(this.state.dGoal) - parseInt(this.state.dTotal)

    return(
      <div>
        <div className="outline">
          <ProgressComponent
          dPercentage={dPercentage}
          dLeft={dLeft}
          submitted={this.state.submitted}
          />
          <div  className="donors">
            <p><span className="daysLeft">Only {this.state.daysLeft} days left</span> to fund this project.</p>
            <p> Join the <span className="contributor">{this.state.totalCon}</span> other donors who have already supported this project.  Every dollar helps.</p>
          </div>
          <FormContainer
          handleStateChange={this.handleStateChange}
          dGoal={this.state.dGoal}
          dTotal={this.state.dTotal}
          />
          <a href="https://www.fincura.com" target="_blank" className="why"> Why give $50? </a>
        </div>

        <button className="savelater"> Save for Later </button>
        <a href="https://www.fincura.com" target="_blank" className="tellfriends"> Tell your friends  </a>

      </div>

    )
  }
}



export default WrapperContainer;
