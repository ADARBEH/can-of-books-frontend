import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';







class Cardofbook extends React.Component {
    
    render() {
      return (
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`${this.props.img_url}`} />
      <Card.Body>
        <Card.Title> {this.props.title}</Card.Title>
        <Card.Text>
         {this.props.description}
        </Card.Text>
        <Button  onClick={() => this.props.deletebook(this.props._id)}>Delete</Button>
        <Card.Link href={`/books/${this.props._id}`}>Update</Card.Link>


      </Card.Body>
    </Card>
      );
    }
}
  
export default Cardofbook;
  