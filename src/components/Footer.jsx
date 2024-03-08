import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/PORTFOLIO.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/gmail.svg';
import navIcon3 from '../assets/img/github.svg';


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div style={{marginTop:'30px'}} className="social-icon">
            <a href="https://www.linkedin.com/in/muhammad-moeez-khan-068788235" target="_blank" rel="noopener noreferrer" ><img src={navIcon1} alt="" /></a>
                <a href="mailto:moeezrajput10@gmail.com" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="" /></a>
                <a href="https://github.com/Moeez-Rajpoot" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="" /></a>
            </div>
            <p>&copy; Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
