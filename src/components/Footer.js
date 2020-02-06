import React from 'react';

function Footer() {
    return (
            <footer className="container-fluid site-footer" style={{backgroundColor: '#36542D'}}>
                <div className="row my-3 align-items-center">             
                    <div className="col-md-3 text-center">
                        <ul className="list-unstyled">
                            <li><a href='/home'>Register</a></li>
                            <li><a href='/directory'>About Us</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 text-center">
                        <ul className="list-unstyled">
                            <li><a href='/aboutus'>Privacy Policy</a></li>
                            <li><a href='/contactus'>Cancellation Policy</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 text-center">
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
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