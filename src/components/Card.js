import React from 'react';
import {  Col } from 'react-bootstrap';

export default class Card extends React.Component {
  render() {
    return (
      <Col className="Card" xs={12} md={3}>
        <h1>{this.props.title}</h1>
        <p>{this.props.country}</p>
        <p>{this.props.price}</p>
        <p>{this.props.room}</p>
      </Col>
    );
  }
}