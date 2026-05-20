import React, { useState } from 'react';
import axios from 'axios';
import { Card, Form, Button, Spinner } from 'react-bootstrap';

const getAuthHeader = () => {
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");

    return {
        Authorization: "Basic " + window.btoa(username + ":" + password)
    };
};

export default function AiAdvisor() {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const askAdvisor = (e) => {
        e.preventDefault();

        setLoading(true);
        setResponse('');

        axios.post(
            "http://localhost:9090/api/ai/advisor",
            { message },
            {
                headers: getAuthHeader()
            }
        )
            .then(res => {
                setResponse(res.data.response);
            })
            .catch(() => {
                setResponse("Error while contacting the AI advisor.");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <Card className="border border-dark bg-dark text-white mt-4">
            <Card.Header>AI Car Advisor</Card.Header>

            <Card.Body>
                <Form onSubmit={askAdvisor}>
                    <Form.Group className="mb-3">
                        <Form.Label>Describe your need</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Example: I need a family car under 200000 MAD"
                        />
                    </Form.Group>

                    <Button type="submit" variant="success" disabled={loading}>
                        {loading ? <Spinner size="sm" /> : "Ask AI"}
                    </Button>
                </Form>

                {response && (
                    <div className="mt-4 p-3 bg-light text-dark rounded">
                        <strong>AI Recommendation:</strong>
                        <p className="mt-2">{response}</p>
                    </div>
                )}
            </Card.Body>
        </Card>
    );
}