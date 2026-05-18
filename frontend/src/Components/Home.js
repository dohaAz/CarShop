import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function Home() {

    return (

        <Card className="border border-dark bg-dark text-white mt-4 text-center">

            <Card.Header>
                Car Shop
            </Card.Header>

            <Card.Body>

                <h2>Welcome to Car Shop Application</h2>

                <p className="mt-3">
                    Please login or create an account to continue.
                </p>

                <Button
                    variant="success"
                    href="/login"
                    className="me-3"
                >
                    Login
                </Button>

                <Button
                    variant="info"
                    href="/register"
                >
                    Register
                </Button>

            </Card.Body>

        </Card>
    );
}