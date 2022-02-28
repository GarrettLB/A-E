import React from 'react';
import { Row, Col } from 'react-bootstrap';
import logo from '../images/logo.png';

function Header() {
  return (
    <div className="bg">
      <Row>
        <Col xs={12} sm={12} md={6} lg={3}>
          <div>
            <img className='screenshot' src={logo}></img>
          </div>
        </Col>
      </Row>
    </div>
  )
};

export default Header;