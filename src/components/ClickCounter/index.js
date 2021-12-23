import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="background">
        <h1 className="heading">the button has been clicked {count} times</h1>
        <button className="button" type="button" onClick={this.onIncrement}>
          click me
        </button>
      </div>
    )
  }
}

export default ClickCounter
