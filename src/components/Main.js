import React, { Component } from 'react';
import Home from './Home';
import Footer from './Footer';
import Header from './Header';

class Main extends Component {

    render() {
        return (
            <div className="container-fluid m-0 p-0">
                <Header />
                <Home />
                <Footer />
            </div>
        )
    }
}

export default Main;