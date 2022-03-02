import React from 'react'
import { Carousel } from "react-bootstrap"
import photo1 from "../../assets/testimage.jpg"
// import photo2 from "../assets/testimage2.png"
// import photo3 from "../assets/testimage3.jpg"
import './style.css';


function CarouselTest() {
    return (
        <div>
            <Carousel fade={true} className="carousel" controls={false}>
                <Carousel.Item interval={2000}>
                        <div class='carousel'>

                        </div>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={photo1}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={photo1}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselTest