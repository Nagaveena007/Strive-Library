import { Component } from "react";
import { Card, Row, Col, Badge, Button } from "react-bootstrap";

class Books extends Component {
  state = {
    selectedBook: false,
  };
  render() {
    return (
      <Row>
        {this.props.books.map((book) => (
          <Col md={3} className="mb-2">
            <Card>
              <Card.Img
                variant="top"
                src={book.img}
                onClick={() =>
                  this.setState({
                    selectedBook: !this.state.selectedBook,
                  })
                }
              />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="warning">$ {book.price}</Button>
                <Badge pill variant="info" className="ml-5">
                  {book.category}
                </Badge>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}

export default Books;
