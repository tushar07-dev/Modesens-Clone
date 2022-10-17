import React from "react";

import styled from "styled-components";
import ItemsCarousel from "react-items-carousel";
import { branditem } from "../../data/homeSlide.js";
import { Link, } from "react-router-dom";
const noOfItems = 4;
const noOfCards = 3;
const autoPlayDelay = 4000;
const chevronWidth = 80;

const Wrapper = styled.div`
  padding: 0 ${chevronWidth}px;
  max-width: 1200px;

  margin: 0 auto;
  margin-bottom: 100px;
 
`;

const SlideItem = styled.img`
  height: 450px;
  width: 100%;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
&~div div:hover{
  background-color: #000000;
  color: white;
}
 
`;

const carouselItems = branditem.map((e) => (
  <div style={{ border: "none" }} className="slideDiv">
    <SlideItem src={e.src} className="slideDiv" />
    <div className="textDiv">
    <h5 style={{ fontSize: "19px", textAlign: "center", fontWeight: "bold",padding: "6px 0"}}>{e.heading}</h5>
    <p style={{ fontSize: "13px", textAlign: "center" }}>{e.sub}</p>
    <div style={{width:"40%", border:"1px solid black", textAlign: "center",margin: "auto" }}>
      <Link to="/beauty" style={{textDecoration:"none", }}>{e.btn1title}</Link>
      
  
    </div>
    </div>
  </div>
));

export default class AutoPlayCarousel extends React.Component {
  //  navigate=useNavigate()
  state = {
    activeItemIndex: 0,
  };

  componentDidMount() {
    this.interval = setInterval(this.tick, autoPlayDelay);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () =>
    this.setState((prevState) => ({
      activeItemIndex:
        (prevState.activeItemIndex + 1) % (noOfItems - noOfCards + 1),
    }));

  onChange = (value) => this.setState({ activeItemIndex: value });
 
  render() {
    return (
      <Wrapper>
        <ItemsCarousel
          gutter={12}
          numberOfCards={noOfCards}
          activeItemIndex={this.state.activeItemIndex}
          requestToChangeActive={this.onChange}
          rightChevron={
            <button
              style={{ border: "none", background: "white", fontSize: "35px" ,fontWeight:"100"}}
            >
              {" "}
              {"→"}
            </button>
          }
          leftChevron={
            <button
              style={{ border: "none", background: "white", fontSize: "35px",fontWeight:"100" }}
            >
              {"←"}
            </button>
          }
          chevronWidth={chevronWidth}
          outsideChevron
          children={carouselItems}
        />
      </Wrapper>
    );
  }
}
