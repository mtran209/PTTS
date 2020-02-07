import React, { useState } from 'react';
import { Navbar, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, NavbarBrand, Button, NavbarToggler, Collapse } from 'reactstrap';
import { baseUrl } from './baseUrl'

function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
    return (
        <div className="container-fluid p-0">
            <Navbar className="d-flex" dark expand="md" sticky="top" style={{backgroundColor: '#36542D'}}>
                <NavbarBrand href="#"><img src={baseUrl + 'images/pttslogo.png'} /></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse style={{textAlign: 'center'}} isOpen={isOpen} navbar>
                    <Nav className="mx-auto" navbar>
                        <UncontrolledDropdown className="px-2" nav inNavbar>
                            <DropdownToggle nav caret>
                                Tutoring
                        </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Math & Science
                            </DropdownItem>
                                <DropdownItem>
                                    English & History
                            </DropdownItem>
                                <DropdownItem>
                                    Test Prep
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                    Organizational & Study Skills
                            </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown className="px-2" nav inNavbar>
                            <DropdownToggle nav caret>
                                Test Prep
                        </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    SAT
                            </DropdownItem>
                                <DropdownItem>
                                    ACT
                            </DropdownItem>
                            <DropdownItem>
                                  SSAT / ISEE / HSPT
                            </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Practice Tests
                            </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown className="px-2" nav inNavbar>
                            <DropdownToggle nav caret>
                                Locations
                        </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Piedmont
                            </DropdownItem>
                                <DropdownItem>
                                    Lafayette
                            </DropdownItem>
                            <DropdownItem>
                                    Peninsula
                            </DropdownItem>
                            <DropdownItem>
                                    Berkeley
                            </DropdownItem>
                            <DropdownItem>
                                    Davis
                            </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Online Tutoring
                            </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown className="px-2" nav inNavbar>
                            <DropdownToggle nav caret>
                                About
                        </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Paul the Tutor
                            </DropdownItem>
                                <DropdownItem>
                                    Our PTTS Tutors
                            </DropdownItem>
                                <DropdownItem>
                                    Why Us?
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                    Rates & Hours
                            </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        </Nav>
                <Nav className="ml-auto justify-content-center">
                    <NavItem>
                        <NavLink className="p-1" href="#"><Button color="success" >Login</Button></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="p-1" href="#"><Button color="primary">Register</Button></NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Header;