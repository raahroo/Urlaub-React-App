import React, { Component } from 'react';
import { Row, Grid } from 'react-bootstrap';
import Card from './components/Card';
import logo from './logo.svg';
import Hauses from './data/hauses'
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    console.log(Hauses);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Urlaub</h1>
        </header>
        <p className="App-intro">
          Find your best option!
        </p>
        <Grid>
          <Row className="show-grid">
            {Hauses.map((item, key) =>
              <Card 
                key={key}
                title={item.title}
                country={item.country}
                price={item.price}
                room={item.room}
              />)
            }
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
