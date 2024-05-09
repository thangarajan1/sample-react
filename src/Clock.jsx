import React, { Component } from 'react'

export default class Clock extends Component {
  constructor() {
    super();
    this.state = {
      hours: "00",
      mins: "00",
      secs: "00",
      ampm: null,
    };
  }

  componentDidMount() {
    this.loadInterval = setInterval(() => this.getTime(), 1000);
  }

  getTime() {
    const ampm1 = new Date().getHours > 12 ? "AM" : "PM";
    this.setState({
      hours: new Date().getHours(),
      mins: new Date().getMinutes(),
      secs: new Date().getSeconds(),
      ampm : ampm1,
    });
  }
  render() {
    return (
      <div>
        <span>{this.state.hours}</span>
        <span>:</span>
        <span>{this.state.mins}</span>
        <span>:</span>
        <span>{this.state.secs}</span>
        <span>{this.state.ampm}</span>
      </div>
    );
  }
}