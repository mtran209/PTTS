import React from 'react';
import { baseUrl } from './baseUrl';
import { Carousel } from 'react-bootstrap';
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap';

function Home() {
    return (
        <div className="d-md-flex container justify-content-center my-3">
            <div className="container d-md-flex">
        <Card>
            <CardImg src={baseUrl + 'images/image1.jpg'} />
            <CardBody>
                <CardTitle>Test Title</CardTitle>
                Test and a bunch of other stuff here
            </CardBody>
        </Card>
        </div>
        <div className="container d-md-flex">
        <Carousel>
        <Carousel.Item>
          <img
            className="d-flex"
            src={baseUrl + 'images/image1.jpg'}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-flex"
            src={baseUrl + 'images/image3.jpg'}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-flex"
            src={baseUrl + 'images/image1.jpg'}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      </div>
    )
}

export default Home;