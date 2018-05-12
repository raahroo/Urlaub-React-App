import React, { Component } from 'react';
import { Row, Grid } from 'react-bootstrap';
import Card from './components/Card';
import logo from './logo.svg';
import './App.css';

class App extends Component {
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
            <Card 
              title={'Schones Haus'}
              country={'Deutschland'}
              price={'50 €'}
              room={'2'}
            />
            <Card 
              title={'Schones Haus'}
              country={'Deutschland'}
              price={'50 €'}
              room={'2'}
            />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
