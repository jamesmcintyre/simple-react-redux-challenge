import React, { Component } from 'react';
import ToggleDiv from './toggle-div';
import ToggleButton from './toggle-btn';
import './App.css';

class App extends Component {

  render() {
    const { value } = this.props;

    return (
      <div className="App" style={{alignItems: 'center'}}>
        <ToggleDiv on={value}/>
        <ToggleButton toggleHandler={this.props.actions.toggleValue}/>
      </div>
    );
  }
}

export default App;
