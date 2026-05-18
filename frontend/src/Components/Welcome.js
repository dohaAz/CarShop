import React from 'react';
import { Card, Button } from 'react-bootstrap';

class Welcome extends React.Component {

    render() {

        return (

            <Card className="bg-dark text-white mt-4 text-center">

                <Card.Header>
                    Welcome
                </Card.Header>

                <Card.Body>

                    <h1>Welcome to the Car Shop</h1>

                    <p className="mt-3">
                        The best cars are available near you.
                    </p>

                    <Button
                        variant="success"
                        href="/add"
                        className="me-3"
                    >
                        Add Car
                    </Button>

                    <Button
                        variant="info"
                        href="/list"
                    >
                        Car List
                    </Button>

                </Card.Body>

            </Card>
        );
    }
}

export default Welcome;