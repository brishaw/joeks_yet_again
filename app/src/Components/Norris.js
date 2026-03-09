import React, { Component } from 'react';
import './Styles/Norris.css';

import axios from 'axios';

class Norris extends Component {
  state = {
    question: '',
    answer: ''
  }

  componentDidMount() {
    axios.get('/api/chuckjokes/')
    .then(response => {
      console.log(response.data.joke);
      this.setState({
        question: response.data.joke
      })
    })
    .catch(error => console.log(error));
  }

  
    handleClick = (e) => {
      e.preventDefault();
      this.setState({
        question: ''
      })
      
      axios.get('/api/chuckjokes/')
        .then(response => {
          console.log(response.data.joke);
          this.setState({
            question: response.data.joke
          })
        })
        .catch(error => console.log(error));
    }
  

  render() {
    return (
      <div className="left box">
        <h3>Chuck Norris Jokes</h3>
        <button className="joke-btn" onClick={this.handleClick} />
        <p>{this.state.question}</p>
        
      </div>
    )
  }
}

export default Norris;