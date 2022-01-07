// import { useState } from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useHistory, useParams, useLocation } from 'react-router-dom';

const FunctionalComponent = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    getUserData();
  }, []);
  const getUserData = async () => {
    const userData = await axios.get('https://fakestoreapi.com/users');
    console.log('userData', userData);
  };
  const history = useHistory();
  const params = useParams();
  const location = useLocation();
  console.log('params-----', params);
  console.log('location-----', location);
  console.log('history-----', history);
  const increaseCount = () => {
    // history.push('/new-path');
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
    history.goBack();
  };

  // Local storage
  // variable
  localStorage.setItem('id1', 1);
  const id = localStorage.getItem('id');
  console.log('id', id);

  //object
  localStorage.setItem('obj', JSON.stringify([{ name: 'bhumika', id: 1 }]));
  const data = localStorage.getItem('obj');
  console.log('data', JSON.parse(data));

  return (
    <div>
      <Card>
        <h1>Functional Component</h1>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label='Check me out' />
          </Form.Group>
          <Button variant='primary' type='submit' onClick={increaseCount}>
            Submit
          </Button>

          {/* <Button variant='primary' type='submit' onClick={decreaseCount}>
            Submit
          </Button> */}
        </Form>
      </Card>
    </div>
  );
};
export default FunctionalComponent;
