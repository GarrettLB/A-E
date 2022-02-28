import React from 'react';
import { Row, Col } from 'react-bootstrap';
import logo from '../images/logo.png';

function Header() {
  return (
    <div className="bg">
      <Row>
        <Col xs={12} md={3}>
          <div>
            <img className='logo' src={logo}></img>
          </div>
        </Col>
      </Row>
    </div>
  )
};

export default Header;