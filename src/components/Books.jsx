import { Component } from "react";
import { Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
class Books extends Component {
  state = {};
  render() {
    return (
      <Row>
        {this.props.books.map((book, i) => (
          <SingleBook singlebook={book} key={i} />
        ))}
      </Row>
    );
  }
}

export default Books;
