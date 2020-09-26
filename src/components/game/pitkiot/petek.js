import React from "react";
import { Card, ProgressBar, Button } from "react-bootstrap";
import "./petek.css";

class Petek extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      variant: "info",
      timePassed: 0,
      timeForRound: 10,
      startDisabled: false,
      cardValue : "",
      interval: undefined,
    };
  }

  start = () => {
    this.setState({
      startDisabled: true,
      variant: "info",
      timePassed: 0,
      cardValue: "get new random",
    });
    var id = setInterval(() => {
      if (this.state.timePassed >= this.state.timeForRound) {
        this.setState({ 
            variant: "danger", 
            cardValue: "",
            startDisabled: false });
        //switch player
        clearInterval(id);
      } else {
        this.setState((state, props) => ({
          timePassed: state.timePassed + 1,
        }));
      }
    }, 1000); // every 1 seconds
  };

  nextCard = () => {
    //send couple + valueof card to server
    //change to next value
    this.setState({ cardValue: "get next"});
  };

  render() {
    // debugger;
    const percent =
      this.state.timePassed === 0
        ? 0
        : 100 * (this.state.timePassed / this.state.timeForRound);
    return (
      <div>
        <Card className="my-card center fifty">
          <Card.Body>
            <Card.Title>
              {this.state.cardValue}
            </Card.Title>
            <Card.Text>
              {this.props.couple ? this.props.couple : "Yael-Avinoam"}
            </Card.Text>
          </Card.Body>
        </Card>
        <Button
          className="start fifty"
          variant="light"
          onClick={this.start}
          disabled={this.state.startDisabled}
        >
          Start
        </Button>
        <div className="center fifty">
          <ProgressBar
            className="timer"
            animated
            now={percent}
            label={`${this.state.timePassed} seconds`}
            variant={this.state.variant}
          />
        </div>
        <Button
          className="next"
          variant="success"
          onClick={this.nextCard}
        >
          Next Card
        </Button>
      </div>
    );
  }
}

export default Petek;
