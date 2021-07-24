import React from 'react';
// import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Navbar'



class Footer extends React.Component {
    
    render(){
        const name = 'Salam Mustafa';
        return(
           <div>
                  <Navbar>
                    <Container>
                        <Navbar.Brand href="#home">Author Salam Mustafa </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                <a href="#login">&copy; ASAC 2021 </a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
           </div>
        )
    }
}

export default Footer;