import React from "react";
import { Form, Button } from "react-bootstrap";
import "./player.css";

class PlayerCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pin: "",
      name: "",
      isAutoGenerate: false,
      autoGenerateCardsDisplayStyle: 'block',
      card1: "",
      card12: "",
      card3: "",
      card4: "",
      card5: "",
    };
  }

  checkAutoGenerate = () => {
    this.setState((state) => ({
      isAutoGenerate: !state.isAutoGenerate,
      autoGenerateCardsDisplayStyle: !state.isAutoGenerate ? 'none' : 'block'
    }));
  };

  addPlayer = () => {
    //send player to server
  };

  render() {
    // debugger;
    return (
      <Form className="form">
        <Form.Group id="autoGenerateCards">
          <Form.Check 
            type="checkbox"
            label="Auto Generate Cards"
            onClick={this.checkAutoGenerate}
          />
        </Form.Group>

        <Form.Group controlId="card1" style={{'display': this.state.autoGenerateCardsDisplayStyle}}>
          <Form.Label>Card 1</Form.Label>
          <Form.Control placeholder="" value={this.state.card1}/>
        </Form.Group>
        <Form.Group controlId="card1" style={{'display': this.state.autoGenerateCardsDisplayStyle}}>
          <Form.Label>Card 2</Form.Label>
          <Form.Control placeholder="" value={this.state.card2}/>
        </Form.Group>
        <Form.Group controlId="card1" style={{'display': this.state.autoGenerateCardsDisplayStyle}}>
          <Form.Label>Card 3</Form.Label>
          <Form.Control placeholder="" value={this.state.card3}/>
        </Form.Group>
        <Form.Group controlId="card1" style={{'display': this.state.autoGenerateCardsDisplayStyle}}>
          <Form.Label>Card 4</Form.Label>
          <Form.Control placeholder="" value={this.state.card4}/>
        </Form.Group>
        <Form.Group controlId="card1" style={{'display': this.state.autoGenerateCardsDisplayStyle}}>
          <Form.Label>Card 5</Form.Label>
          <Form.Control placeholder="" value={this.state.card5}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit Cards
        </Button>
      </Form>
    );
  }
}

export default PlayerCards;
