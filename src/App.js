import React, { Component } from 'react';
import ToggleDiv from './toggle-div';
import ToggleButton from './toggle-btn';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {on: false};
    this.toggleColor = this.toggleColor.bind(this);
  }

  toggleColor() {
    const toggled = !this.state.on;
    this.setState({on: toggled});
  }

  render() {
    const { on } = this.state;

    return (
      <div className="App" style={{alignItems: 'center'}}>
        <ToggleDiv on={on}/>
        <ToggleButton toggleHandler={this.toggleColor}/>
      </div>
    );
  }
}

export default App;
