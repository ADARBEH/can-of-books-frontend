import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';





class BookFormModal extends React.Component {
    
    render() {
      return (
        <Form onSubmit={this.props.createbook}>
        <Form.Group className="mb-3" controlId="booktitle">
          <Form.Label>title</Form.Label>
          <Form.Control type="test" placeholder="Enter title" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="bookdescription">
          <Form.Label>description</Form.Label>
          <Form.Control type="test" placeholder="Enter description" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="bookimg_url">
          <Form.Label>img_url</Form.Label>
          <Form.Control type="test" placeholder="Enter img_url" />
        </Form.Group>
  
        <Button type="submit"> Submit</Button>
      </Form>
      );
    }
}
  
export default BookFormModal;
  