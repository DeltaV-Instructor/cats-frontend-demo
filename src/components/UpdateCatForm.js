import React from "react";

class UpdateCatForm extends React.Component {
  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder={this.props.cat.name} />
          </Form.Group>
          <Form.Group controlId="color">
            <Form.Label>Color</Form.Label>
            <Form.Control type="text" placeholder={this.props.cat.color} />
          </Form.Group>
          <Form.Group controlId="location">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder={this.props.cat.location} />
          </Form.Group>
          <Form.Group controlId="spayNeuter">
            <Form.Check type="checkbox" label="spay-neuter" />
          </Form.Group>
          <Button type="submit">Update Cat</Button>
        </Form>
      </Container>
    );
  }
}

export default UpdateCatForm;
