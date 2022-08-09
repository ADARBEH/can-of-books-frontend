import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './style.css';
import Books from './Book';

function Profile() {
  const { isAuthenticated, user } = useAuth0();

  return isAuthenticated && (
    <>  
    <Card style={{ width: '25rem' }} className='card'>
    <Card.Img variant="top" src={`${user.picture}`} className='img' />
    <Card.Body>
      <Card.Title className='titel'> Welcome {user.name}</Card.Title>
      <Card.Text>
        <p className='parag'>This Is Some Of Your Information</p>
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item className='data'> Your Email Is : {user.email}</ListGroup.Item>
      <ListGroup.Item className='data'> Your Nickname Is : {user.nickname}</ListGroup.Item>
      <ListGroup.Item className='data'> Your Locale Is : {user.locale}</ListGroup.Item>
    </ListGroup>
  </Card>
  <Books />
  </>
 );
}

export default Profile;