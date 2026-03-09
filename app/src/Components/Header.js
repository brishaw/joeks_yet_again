import React, { Component } from 'react';
import './Styles/Header.css';

class Header extends Component {

  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="logo"><span>Recycled!</span></div>
          <div className="text">
            <p><span>T</span>his app uses React, Node, Express and currently lives on my website (hosted by ionus).</p>
            <p>The Chuck Norris, dad jokes and riddles are all from APIs. You can see more of what's under the hood at the <a href="https://github.com/brishaw/joeks_again" alt="Link to the Github repo">repo</a>.</p>
            <p>Inspired by my TA, Joe Faulstick, who always brought a good one to class!</p>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;