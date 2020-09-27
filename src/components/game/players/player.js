import React from "react";
import { Form, Button } from "react-bootstrap";
import "./player.css";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pin: "",
      name: "",
    };
  }

  addPlayer = () => {
    //send player to server
  };

  render() {
    // debugger;
    return (
      <Form className="form">
        <Form.Group controlId="gamePinNumber">
          <Form.Label>Game PIN Number</Form.Label>
          <Form.Control placeholder="example: 123456" />
        </Form.Group>

        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="What's your name?" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign me in
        </Button>
      </Form>
    );
  }
}

export default Player;
