import React, { useState } from 'react';
import axios from 'axios';
import { Card, Form, Button } from 'react-bootstrap';

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const register = (e) => {
        e.preventDefault();

        axios.post("http://localhost:9090/auth/register", {
            username,
            password
        })
            .then(() => {
                setMessage("Account created successfully. Redirecting to login...");

                setTimeout(() => {
                    window.location.href = "/login";
                }, 1500);
            })
            .catch(() => {
                setMessage("Username already exists");
            });
    };

    return (
        <Card className="border border-dark bg-dark text-white mt-4">
            <Card.Header>Register</Card.Header>

            <Card.Body>
                {message && <p>{message}</p>}

                <Form onSubmit={register}>
                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Button type="submit" variant="success">Register</Button>
                </Form>
            </Card.Body>
        </Card>
    );
}