// import { Button } from 'bootstrap';
import axios from 'axios';
import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

class ClassComponent extends Component {
  constructor(props) {
    console.log('inside constructer');
    super(props);
    this.state = {
      count: 0,
    };
  }
  increaseCount = async () => {
    const { count } = this.state;
    console.log('test---', count);
    this.setState({ count: count + 1 }, () => {
      console.log('test in callback', this.state.count);
    });

    const addData = await axios
      .post('/users', {
        email: 'John@gmail.com',
        username: 'johnd',
        password: 'm38rmF$',
        name: {
          firstname: 'John',
          lastname: 'Doe',
        },
        address: {
          city: 'kilcoole',
          street: '7835 new road',
          number: 3,
          zipcode: '12926-3874',
          geolocation: {
            lat: '-37.3159',
            long: '81.1496',
          },
        },
        phone: '1-570-236-7033',
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  decreaseCount = () => {
    const { count } = this.state;
    console.log('test---', count);
    this.setState({ count: count - 1 }, () => {
      console.log('test in callback', this.state.count);
    });
  };

  componentDidMount = async () => {
    console.log('hi i am called didmount');
    const userData = await axios.get('/users');

    // console.log('userData', userData);
  };
  componentDidUpdate = () => {
    console.log('hi i am called didupdate ');
  };
  render() {
    console.log('inside render');

    // console.log('test---');
    // console.log('this.props', this.props);
    // const { match } = this.props;
    // const { params } = match;
    // const { id, name } = params;
    // console.log('id', id, 'name', name);
    // localStorage.removeItem('id1');
    const { count } = this.state;

    return (
      <div>
        {console.log('inside return')}
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
