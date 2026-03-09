
import React, { Component } from 'react';
import axios from 'axios';
import './Styles/Riddles.css';

console.log('at test js...');

class Riddles extends Component {
  state = {
    question: '',
    answer: ''
  }
  
  componentDidMount() {
    axios.get('/api/riddles/')
      .then(response => {
        const riddles = response.data.riddles;
        const randomIndex = Math.floor(Math.random() * riddles.length);
        this.setState({
          question: riddles[randomIndex].question,
          answer: riddles[randomIndex].answer
        })
      })
      .catch(error => console.log(error));
  }

  handleClick = (e) => {
    e.preventDefault();
    axios.get('/api/riddles/')
      .then(response => {
        const riddles = response.data.riddles;
        const randomIndex = Math.floor(Math.random() * riddles.length);
        this.setState({
          question: riddles[randomIndex].question,
          answer: riddles[randomIndex].answer
        })
      })
      .catch(error => console.log(error));
      document.getElementById("riddleAnswer").style.visibility = "hidden";
  }

  showAnswer = (e) => {
    e.preventDefault();
    console.log("clicked");
    document.getElementById("riddleAnswer").style.visibility = "visible";
  }

  

  render() {
    return (
      <div className="right box">
        <h3>A Riddle</h3>
        <button className="joke-btn" onClick={this.handleClick} />
        <p>{this.state.question}</p>
        <button className="joke-btn reveal" onClick={this.showAnswer}></button>
        <p id="riddleAnswer" className="riddle-answer">{this.state.answer}</p>
      </div>
    )
  }
}

export default Riddles;
