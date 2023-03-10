import React from "react";
import { Container, ListGroup, Button } from "react-bootstrap";
import UpdateCatForm from "./UpdateCatForm.js";

class Cats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpdateForm: false,
    };
  }

  render() {
    // console.log(this.props.cats);
    let cats = this.props.cats.map((cat) => (
      <Cat
        cat={cat}
        key={cat._id}
        deleteCats={this.props.deleteCats}
        updateCats={this.props.updateCats}
      />
    ));
    return (
      <Container>
        <ListGroup>{cats}</ListGroup>
      </Container>
    );
  }
}

//two components in the same file they belong together and Cats can only use Cat
class Cat extends Cats {
  render() {
    return (
      <>
        <ListGroup.Item>
          {this.props.cat.name} is {this.props.cat.color}
          <Button
            variant="warning"
            onClick={() => this.props.deleteCats(this.props.cat._id)}
          >
            Delete Cat
          </Button>
          <Button
            variant="success"
            
            onClick={() => this.setState({ showUpdateForm: true })}
          >
            Update Cat
          </Button>
        </ListGroup.Item>
        {this.state.showUpdateForm && 
        <UpdateCatForm 
        cat={this.props.cat} 
        updateCats={this.props.updateCats}
        />}
      </>
    );
  }
}

export default Cats;
