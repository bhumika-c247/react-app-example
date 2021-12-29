import React, { Component } from 'react';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increaseCount = () => {
    const { count } = this.state;
    console.log('test---', count);
    this.setState({ count: count + 1 }, () => {
      console.log('test in callback', this.state.count);
    });
  };
  decreaseCount = () => {
    const { count } = this.state;
    console.log('test---', count);
    this.setState({ count: count - 1 }, () => {
      console.log('test in callback', this.state.count);
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Class Component</h1>
        <button onClick={this.increaseCount} className='button-count'>
          +
        </button>
        {count}
        <button onClick={this.decreaseCount} className='button-count'>
          -
        </button>
      </div>
    );
  }
}
export default Test;
