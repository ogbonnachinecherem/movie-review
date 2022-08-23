import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


class Navbars extends Component {
    render() {
        return (
            <div>
                <Navbar fixed="top"  bg="danger" expand="lg">
                <Nav.Item as="li">
        <Link style={{marginRight: "1rem", color: "black", textDecoration: "none"}} to="/">EldeeMovieHouse</Link>
        </Nav.Item>
    <Nav className="ms-auto" defaultActiveKey="/" as="ul" style={{ padding: "15px",}} >
        <Nav.Item as="li">
        <Link  style={{marginRight: "1rem", color: "white", textDecoration: "none"}} to="home">Home</Link>
        </Nav.Item>
        <Nav.Item as="li">
        <Link  style={{marginRight: "1rem", color: "white", textDecoration: "none"}} to="movies">Movies</Link>
        </Nav.Item>
        <Nav.Item as="li">
        <Link  style={{marginRight: "1rem", color: "white", textDecoration: "none"}} to="projects">Projects</Link>
        </Nav.Item>
    </Nav>
  </Navbar>
            </div>
        );
    }
}

export default Navbars;
