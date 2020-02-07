import React, { useState } from 'react';
import { Navbar, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, NavbarBrand, Button, NavbarToggler, Collapse } from 'reactstrap';
import { baseUrl } from './baseUrl'

function Footer() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
            <footer className="container-fluid site-footer" style={{backgroundColor: '#36542D'}}>
                <div className="d-flex row justify-content-center p-3" style={{backgroundColor: '#D1CFB5'}}>
               <Button className='m-2' color="warning">What We Do</Button>
                    <Button className='m-2' color="danger">Who We Tutor</Button>
                    <Button className='m-2' color="primary" >How It Works</Button>
                   <Button className='m-2' color="success">Free Consultation</Button>
                   <Button className='m-2' color="success">Get Started</Button>
                </div>
                <div className="row my-3 align-items-center">             
                    <div className="col-md-3 text-center">
                        <ul className="list-unstyled mb-0">
                            <li><a href='/home'>Register</a></li>
                            <li><a href='/directory'>About Us</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 text-center">
                        <ul className="list-unstyled mb-0">
                            <li><a href='/aboutus'>Privacy Policy</a></li>
                            <li><a href='/contactus'>Cancellation Policy</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 text-center">
                        <a className="btn btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '} 
                    </div>
                    <div className="col-md-3 text-center">
                        <a role="button" className="btn btn-link" href="tel:+15107300390"><i className="fa fa-phone" /> 1-510-730-0390</a><br />
                        <a role="button" className="btn btn-link" href="mailto:info@paulthetutors.com"><i className="fa fa-envelope-o" /> info@paulthetutors.com</a>
                    </div>
                </div>
        </footer>
    );
}

export default Footer;