import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col
} from 'reactstrap';

import CustomerForm from './CustomerForm'

class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                 <Navbar color="dark" dark expand="md">
                    <br/>
                    <br/>
                    <NavbarBrand href="/">El Paso Child Guidance Center</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://epcgc.org">EPCGC</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Another Link</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>              
                    <Container>
                        <Row>
                            <Col>
                              <CustomerForm />
                            </Col>
                        </Row>
                    </Container>               
            </div>
        );
    }
}

export default App;