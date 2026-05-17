import React, { Component } from 'react';
import axios from 'axios';
import { Card, Form, Button, Col, Row } from 'react-bootstrap';
import MyToast from './MyToast';

export default class Car extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: '',
      brand: '',
      model: '',
      color: '',
      registrationNumber: '',
      manufacturingYear: '',
      price: '',
      show: false,
      message: ''
    };

    this.carChange = this.carChange.bind(this);
    this.submitCar = this.submitCar.bind(this);
    this.resetCar = this.resetCar.bind(this);
  }

  componentDidMount() {

    const id = window.location.pathname.split("/")[2];

    if (id) {

      axios.get("http://localhost:9090/api/cars/" + id)
        .then(response => {

          if (response.data != null) {

            this.setState({
              id: id,
              brand: response.data.brand,
              model: response.data.model,
              color: response.data.color,
              registrationNumber: response.data.registrationNumber,
              manufacturingYear: response.data.manufacturingYear,
              price: response.data.price
            });

            
          }
        });
    }
  }

  resetCar() {

    this.setState({
      id: '',
      brand: '',
      model: '',
      color: '',
      registrationNumber: '',
      manufacturingYear: '',
      price: ''
    });
  }

  carChange(event) {

    this.setState({
      [event.target.name]: event.target.value
    });
  }

  submitCar(event) {

    event.preventDefault();

    const car = {
      brand: this.state.brand,
      model: this.state.model,
      color: this.state.color,
      registrationNumber: this.state.registrationNumber,
      manufacturingYear: this.state.manufacturingYear,
      price: this.state.price
    };

    if (this.state.id) {

      axios.put(
        "http://localhost:9090/api/cars/" + this.state.id,
        car
      )
        .then(response => {

          if (response.data != null) {

            this.setState({
              show: true,
              message: "Car updated successfully"
            });

            setTimeout(() => {
              this.setState({ show: false });
              window.location.href = "/list";
            }, 3000);
          }
        });

    } else {

      axios.post(
        "http://localhost:9090/api/cars",
        car
      )
        .then(response => {

          if (response.data != null) {

            this.setState({
              show: true,
              message: "Car saved successfully",
              brand: '',
              model: '',
              color: '',
              registrationNumber: '',
              manufacturingYear: '',
              price: ''
            });

            setTimeout(() => {
              this.setState({ show: false });
              window.location.href = "/list";
            }, 3000);
          }
        });
    }
  }

  render() {

    return (

      <div>

        <MyToast
          show={this.state.show}
          message={this.state.message}
        />

        <Card className="border border-dark bg-dark text-white mt-4">

          <Card.Header>
            {this.state.id ? "Update Car" : "Add Car"}
          </Card.Header>

          <Form onSubmit={this.submitCar} onReset={this.resetCar}>

            <Card.Body>

              <Row>

                <Form.Group as={Col}>
                  <Form.Label>Brand</Form.Label>

                  <Form.Control
                    required
                    autoComplete="off"
                    type="text"
                    name="brand"
                    value={this.state.brand}
                    onChange={this.carChange}
                    className="bg-dark text-white"
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Model</Form.Label>

                  <Form.Control
                    required
                    autoComplete="off"
                    type="text"
                    name="model"
                    value={this.state.model}
                    onChange={this.carChange}
                    className="bg-dark text-white"
                  />
                </Form.Group>

              </Row>

              <Row className="mt-3">

                <Form.Group as={Col}>
                  <Form.Label>Color</Form.Label>

                  <Form.Control
                    required
                    autoComplete="off"
                    type="text"
                    name="color"
                    value={this.state.color}
                    onChange={this.carChange}
                    className="bg-dark text-white"
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Registration Number</Form.Label>

                  <Form.Control
                    required
                    autoComplete="off"
                    type="text"
                    name="registrationNumber"
                    value={this.state.registrationNumber}
                    onChange={this.carChange}
                    className="bg-dark text-white"
                  />
                </Form.Group>

              </Row>

              <Row className="mt-3">

                <Form.Group as={Col}>
                  <Form.Label>Manufacturing Year</Form.Label>

                  <Form.Control
                    required
                    autoComplete="off"
                    type="number"
                    name="manufacturingYear"
                    value={this.state.manufacturingYear}
                    onChange={this.carChange}
                    className="bg-dark text-white"
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Price</Form.Label>

                  <Form.Control
                    required
                    autoComplete="off"
                    type="number"
                    name="price"
                    value={this.state.price}
                    onChange={this.carChange}
                    className="bg-dark text-white"
                  />
                </Form.Group>

              </Row>

            </Card.Body>

            <Card.Footer className="text-end">

              <Button size="sm" variant="success" type="submit">
                {this.state.id ? "Update" : "Submit"}
              </Button>{' '}

              <Button size="sm" variant="info" type="reset">
                Reset
              </Button>

            </Card.Footer>

          </Form>

        </Card>

      </div>
    );
  }
}