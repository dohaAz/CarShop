import React, { useState } from 'react';
import axios from 'axios';
import { Card, Form, Button } from 'react-bootstrap';

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const login = (e) => {

        e.preventDefault();

        const auth = "Basic " + window.btoa(username + ":" + password);

        axios.get(
            "http://localhost:9090/auth/login",
            {
                headers: {
                    Authorization: auth
                }
            }
        )

            .then(() => {

                localStorage.setItem("username", username);
                localStorage.setItem("password", password);

                window.location.href = "/welcome";
            })

            .catch(() => {

                setMessage("Invalid username or password");
            });
    };

    return (

        <Card className="border border-dark bg-dark text-white mt-4">

            <Card.Header>
                Login
            </Card.Header>

            <Card.Body>

                {message &&
                    <p className="text-danger">
                        {message}
                    </p>
                }

                <Form onSubmit={login}>

                    <Form.Group className="mb-3">

                        <Form.Label>
                            Username
                        </Form.Label>

                        <Form.Control
                            type="text"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                    </Form.Group>

                    <Form.Group className="mb-3">

                        <Form.Label>
                            Password
                        </Form.Label>

                        <Form.Control
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                    </Form.Group>

                    <Button
                        type="submit"
                        variant="success"
                    >
                        Login
                    </Button>

                    <p className="mt-3">

                        Don't have an account ?

                        <a
                            href="/register"
                            className="ms-2"
                        >
                            Register
                        </a>

                    </p>

                </Form>

            </Card.Body>

        </Card>
    );
}