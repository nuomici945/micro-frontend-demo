import React from 'react';

export default function(props) {
    // return (<h1>Hello, {props.name},{props.date.toLocaleTimeString()}</h1>);
    return (<Clock name={props.name}></Clock>)
}
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date(),name:props.name};
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.state.name}!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}