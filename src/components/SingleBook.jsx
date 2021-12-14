import { Component } from "react";
import { Card, Row, Col, Badge, Button } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selectedBook: false,
  };
  render() {
    return (
      <Col md={3} className="mb-2">
        <Card style={{}}>
          <Card.Img
            variant="top"
            style={{}}
            src={this.props.singlebook.img}
            onClick={() =>
              this.setState({
                selectedBook: this.props.singlebook,
              })
            }
          />
          <Card.Body>
            <Card.Title>{this.props.singlebook.title}</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="warning">$ {this.props.singlebook.price}</Button>
            <Badge pill variant="info" className="ml-5">
              {this.props.singlebook.category}
            </Badge>
          </Card.Footer>
        </Card>
      </Col>
    );
  }
}
export default SingleBook;
