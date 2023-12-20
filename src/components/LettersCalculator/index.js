import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: ''}

  getCountOfLetters = event => {
    const searchInput = event.target.value
    this.setState({count: searchInput})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-con">
        <div className="matter-card">
          <h1 className="head">
            Calculate the
            <br /> Letters you
            <br /> enter
          </h1>
          <label htmlFor="letter" className="font">
            Enter the phrase
          </label>
          <br />
          <input
            id="letter"
            type="text"
            placeholder="Enter the phrase"
            onChange={this.getCountOfLetters}
          />
          <div className="in-card">
            <p>No.of letters: {count.length}</p>
          </div>
        </div>

        <div>
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
