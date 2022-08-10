import React from "react";
import axios from "axios";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Cardofbook from "./Cardofbook";
import BookFormModal from "./BookFormModal";



class Books extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            books :[]
        }
    }
    
    getbooks = async() => {

        const book = await axios.get('http://localhost:3002/books')
        this.setState({
            books : book.data
        })
        console.log(this.state.books)
    }


    deletebook = async (id) => {
      await axios.delete(`http://localhost:3002/books/${id}`);
      this.getbooks()
    }


    createbook = async (e) => {
      e.preventDefault();
      const newbook = {
        'title': e.target.booktitle.value,
        'description': e.target.bookdescription.value,
        'img_url': e.target.bookimg_url.value,
      }
      console.log(newbook)
      await axios.post('http://localhost:3002/books', {newbook});
      this.getbooks();
    }

    
    componentDidMount (){
        this.getbooks()
    }
    render() {
      return (
        <>
        <BookFormModal createbook={this.createbook}/>

        <Row xs={3} md={3} className="g-4">
        {this.state.books.map(item => 
        {
        return (
        <Col>
          <Cardofbook title={item.title} img_url={item.img_url} description={item.description} status={item.status} _id={item._id}
          deletebook={this.deletebook}/>
       </Col>
        )})  
        } 
        </Row>        
      </>
      );
    }
  }
  
  export default Books;
  