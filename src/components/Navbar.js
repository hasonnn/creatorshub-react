import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap'
import { Session } from '../requests'
 
const NavBar = ({ currentUser, onSignOut }) => {
    const handleSignOut = () => {
      Session.destroy().then(() => {
        onSignOut()
      })
    }

    return (
        <nav>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">
                {currentUser ? (
                <img
                    src="/logo-fa.svg"
                    width="400"
                    height="49"
                    className="d-inline-block align-top"
                    alt="creatorhub full access logo "
                /> 
                ) : (
                <img
                    src="/logo.svg"
                    width="400"
                    height="45"
                    className="d-inline-block align-top"
                    alt="creatorhub logo"
                /> 
                )}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                
                <Nav className="mr-auto">
                    <Nav.Link href="/courses">Courses</Nav.Link>
                </Nav>
                    <div className="padding">
                        <Nav className="me-auto">
                            {currentUser ? (
                                <React.Fragment>
                                    <Nav.Link eventKey="disabled" disabled>
                                        <span className="nav-welcome">Welcome, {currentUser.full_name}!</span>
                                    </Nav.Link> 
                                    <Nav.Link onClick={handleSignOut}>Sign Out</Nav.Link>
                                </React.Fragment>
                            ) : (
                                <> 
                                    <Nav.Link href="/sign_in">Sign In</Nav.Link>
                                    <Nav.Link href="/sign_up">Sign Up</Nav.Link>
                                </>
                            )}
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </nav>
    )
}


export default NavBar