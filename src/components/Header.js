import React, { Component } from 'react';
import { Navbar, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, NavbarBrand, Button } from 'reactstrap';
import { baseUrl } from './baseUrl'

class Header extends Component {
    render() {
        return (
            <div className="container-fluid p-0">
                <Navbar className="header d-flex justify-content-between" color="light" light expand="md">
                <NavbarBrand className="ml-2" href="#"><img src={baseUrl + 'images/pttslogo.png'} className="logoimage"/></NavbarBrand>
                    <Nav navbar>
                    <UncontrolledDropdown className="px-2" nav inNavbar>
                        <DropdownToggle nav caret>
                            Tutoring
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                Option 1
                            </DropdownItem>
                            <DropdownItem>
                                Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                Reset
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown className="px-2" nav inNavbar>
                        <DropdownToggle nav caret>
                            Test Prep
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                Option 1
                            </DropdownItem>
                            <DropdownItem>
                                Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                Reset
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown className="px-2" nav inNavbar>
                        <DropdownToggle nav caret>
                            Locations
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                Option 1
                            </DropdownItem>
                            <DropdownItem>
                                Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                Reset
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown className="px-2" nav inNavbar>
                        <DropdownToggle nav caret>
                            About
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                Option 1
                            </DropdownItem>
                            <DropdownItem>
                                Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                Reset
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                        </Nav>
                        <Nav>
                        <NavItem>
                            <NavLink className="p-1" href="#"><Button size="sm" color="warning">Get Started</Button></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="p-1" href="#"><Button size="sm" color="primary">Pay Your Bill</Button></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="p-1" href="#"><Button size="sm" color="info">Login</Button></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="p-1" href="#"><Button size="sm" color="success">Register</Button></NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Header;