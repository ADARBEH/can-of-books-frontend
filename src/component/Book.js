import React from "react";
import axios from "axios";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Cardofbook from "./Cardofbook";


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
    
    componentDidMount (){
        this.getbooks()
    }
    render() {
      return (
        <>
        <Row xs={3} md={3} className="g-4">
        {this.state.books.map(item => 
        {
        return (
        <Col>
          <Cardofbook title={item.title} img_url={item.img_url} description={item.description} status={item.status} />
       </Col>
        )})  
        } 
        </Row>        
      </>
      );
    }
  }
  
  export default Books;
  