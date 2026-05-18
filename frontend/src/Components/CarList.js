import React, { Component } from 'react';
import axios from 'axios';
import { Card, Table, Button, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import MyToast from './MyToast';

const getAuthHeader = () => {
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");

    return {
        Authorization: "Basic " + window.btoa(username + ":" + password)
    };
};

export default class CarList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cars: [],
            show: false,
            message: ''
        };
    }

    componentDidMount() {
        axios.get("http://localhost:9090/api/cars", {
            headers: getAuthHeader()
        })
            .then(response => {
                this.setState({
                    cars: response.data._embedded.cars
                });
            })
            .catch(() => {
                window.location.href = "/login";
            });
    }

    deleteCar = (carId) => {

        axios.delete("http://localhost:9090/api/cars/" + carId, {
            headers: getAuthHeader()
        })

            .then(response => {

                if (response.status === 204) {

                    this.setState({
                        cars: this.state.cars.filter(
                            car => car._links.self.href.split("/").pop() !== carId
                        ),
                        show: true,
                        message: "Car deleted successfully"
                    });

                    setTimeout(() => {
                        this.setState({ show: false });
                    }, 3000);
                }
            })

            .catch(() => {
                window.location.href = "/login";
            });
    }

    render() {
        return (
            <div>
                <MyToast
                    show={this.state.show}
                    message={this.state.message}
                    type="danger"
                />

                <Card className="border border-dark bg-dark text-white mt-4">
                    <Card.Header>Car List</Card.Header>

                    <Card.Body>
                        <Table bordered hover striped variant="dark">
                            <thead>
                            <tr>
                                <th>Brand</th>
                                <th>Model</th>
                                <th>Color</th>
                                <th>Year</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                            </thead>

                            <tbody>
                            {
                                this.state.cars.length === 0 ?
                                    <tr align="center">
                                        <td colSpan="6">No Cars Available</td>
                                    </tr>
                                    :
                                    this.state.cars.map((car) => (
                                        <tr key={car._links.self.href}>
                                            <td>{car.brand}</td>
                                            <td>{car.model}</td>
                                            <td>{car.color}</td>
                                            <td>{car.manufacturingYear}</td>
                                            <td>{car.price}</td>

                                            <td>
                                                <ButtonGroup>
                                                    <Link
                                                        to={"/edit/" + car._links.self.href.split("/").pop()}
                                                        className="btn btn-sm btn-outline-primary"
                                                    >
                                                        <FontAwesomeIcon icon={faEdit} />
                                                    </Link>{' '}

                                                    {/*<Button*/}
                                                    {/*    size="sm"*/}
                                                    {/*    variant="outline-danger"*/}
                                                    {/*    onClick={() => this.deleteCar(car._links.self.href)}*/}
                                                    {/*>*/}
                                                    {/*    <FontAwesomeIcon icon={faTrash} />*/}
                                                    {/*</Button>*/}
                                                    <Button
                                                        size="sm"
                                                        variant="outline-danger"
                                                        onClick={() => this.deleteCar(car._links.self.href.split("/").pop())}
                                                    >
                                                        <FontAwesomeIcon icon={faTrash} />
                                                    </Button>
                                                </ButtonGroup>
                                            </td>
                                        </tr>
                                    ))
                            }
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}