// import { Button } from 'bootstrap';
import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

class ClassComponent extends Component {
  constructor(props) {
    console.log('inside conssssssss');
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
    console.log('test---');
    const { count } = this.state;
    console.log('this.props', this.props);
    const { match } = this.props;
    const { params } = match;
    const { id, name } = params;
    console.log('id', id, 'name', name);
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

        <Row className='mx-0'>
          <Button as={Col} variant='primary'>
            Button #1
          </Button>
          <Button as={Col} variant='secondary' className='mx-2'>
            Button #2
          </Button>
          <Button as={Col} variant='success'>
            Button #3
          </Button>
        </Row>
      </div>
    );
  }
}
export default ClassComponent;
