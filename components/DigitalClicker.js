const React = require('react');

class DigitalClicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timesClicked: 0
    }
    this.clickHandler = this.clickHandler.bind(this)
  }
  clickHandler() {
    this.setState({
      timesClicked: this.state.timesClicked += 1
    })
  }
  render() {
    return(
      <div>
        <button onClick={this.clickHandler}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

module.exports = DigitalClicker

// In the components/DigitalClicker.js file, create a DigitalClicker React component.
// This component has a state property called timesClicked, that is initially defined as 0.
// The component renders out a button with a label that shows the timesClicked value. This means that at the start, your button should just say 0.
// Whenever the button is clicked, update the state by incrementing the timesClicked by 1.
