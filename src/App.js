import React, { Component } from 'react';
import { Row, Grid } from 'react-bootstrap';
import Card from './components/Card';
import logo from './logo.svg';
import imgGermany from './data/germany1.jpg'
import _ from 'lodash';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      items:[
        {id: 1, country: 'Germany', price:150, room: 2, display:true, image:imgGermany},
        {id: 2, country: 'Italy', price:200,room: 1, display:true},
        {id: 3, country: 'Spain', price:50, room: 3,display:true},
        {id: 4, country: 'Brazil', price:20, room: 2,display:true},
				{id: 5, country: 'Germany', price:10,room: 1, display:true},
				{id: 6, country: 'Italy', price:10,room: 2, display:true},
				{id: 7, country: 'Spain', price:0,room: 3, display:true},
				{id: 8, country: 'Brazil', price:149,room: 2, display:true},
				{id: 9, country: 'Germany', price:201, room: 4,display:true}, 
        {id: 10, country: 'Italy', price:3,room: 1, display:true},
			]
  }
    this.filterList = this.filterList.bind(this);
  }

 
  filterList(event, state){
    let newValue = event.target.value.toLowerCase();
    let newTab = this.state.items;

    newTab.forEach(product=>{
      let include = product.country.toLowerCase().includes(newValue);
      include ? product.display=true:product.display=false;
    });
   
    //newTab = _.filter(newTab, ['display', true]);
    this.setState({items:newTab});
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
        <input 
          type="text" 
          placeholder="Search"
          onChange={this.filterList}
        />
        <Grid>
          <Row className="show-grid">
            {
              this.state.items.map((hause, i)=>{
              
                return (
                  <Card 
                    key={i} 
                    display={hause.display} 
                    title={hause.title}
                    country={hause.country}
                    price={hause.price}
                    room={hause.room}
                    image={hause.image}
                  />
                );
              })
            }

          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
