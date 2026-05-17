import React from 'react';
import { Card } from 'react-bootstrap';

class Welcome extends React.Component {
  render() {
    return (
      <Card className="bg-dark text-white mt-4">
        <Card.Body>
          <h1>Welcome to the Car Shop</h1>
          <p>The best cars are available near you.</p>
        </Card.Body>
      </Card>
    );
  }
}

export default Welcome;