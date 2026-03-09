import React, { Component } from 'react';
import './Components/Styles/App.css';
import Header from './Components/Header';
import Riddles from './Components/Riddles';
import Dad from './Components/Dad';
import Norris from './Components/Norris';
import Footer from './Components/Footer';

//import Dashboard from './Components/Dashboard';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <div className="content">
          
          <Norris />
          <Dad />
          <Riddles />
        </div>
        
        <Footer />
      </div>
    );
  }
}

export default App;
