import React from 'react'
import { Carousel} from 'react-bootstrap'
import slider1 from  "../../images/slider1.png"
import slider2 from  "../../images/slider2.png"
import slider3 from  "../../images/slider3.png"
import slider4 from  "../../images/slider4.png"
import slider5 from  "../../images/slider5.png"
import slider6 from  "../../images/slider6.png"
import slider7 from  "../../images/slider7.png"
import slider8 from  "../../images/slider8.png"
import slider9 from  "../../images/slider9.png"


export default function Homeslider() {
  return (
    <div style={{height:"450px",width:"70vw",margin:"auto" }}>
                    <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slider1}
                alt="First slide"
                />
                {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slider2}
                alt="Second slide"
                />

                {/* <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>

            <Carousel.Item>
                <img 
                className="d-block w-100"
                src={slider3}
                alt="Third slide"
                />

                {/* <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption> */}
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slider4}
                alt="First slide"
                />
                {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slider5}
                alt="First slide"
                />
                {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slider6}
                alt="First slide"
                />
                {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slider7}
                alt="First slide"
                />
                {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slider8}
                alt="First slide"
                />
                {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slider9}
                alt="First slide"
                />
                {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            </Carousel>
    </div>
  )
}
