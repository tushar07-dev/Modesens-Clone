import React from "react";

import styled from "styled-components";
import ItemsCarousel from "react-items-carousel";
import { communityPosts } from "../../data/communityPosts";
const noOfItems = 10;
const noOfCards = 4;
const autoPlayDelay = 800;
const chevronWidth = 80;

const Wrapper = styled.div`
  padding: 0 ${chevronWidth}px;
  max-width: 1200px;

  margin: 0 auto;
  margin-bottom: 100px;
`;

const Container = styled.div`
   
    position: relative;
   width:100%;
   height: 296px;
`

const SlideItem = styled.img`
  height: 100%;
  width: 100%;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
 border: 1px solid #868686;
`;




const carouselItems = communityPosts.map((e) => (
  <Container  className="slideDiv">

    <div style={{  display: "flex",border: "none",justifyContent: "center",padding: "20px 8px", height: "100%",width:"85%",margin: "auto"}}>
      <SlideItem style={{width: "100%"}} src={e.src} />
    </div>
    
  </Container>
));

export default class AutoPlayCarousel extends React.Component {
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
              style={{ border: "none", background: "white", fontSize: "35px",fontWeight:"100",color:"gray" }}
            >
              {" "}
              {"→"}
            </button>
          }
          leftChevron={
            <button
              style={{ border: "none", background: "white", fontSize: "35px",fontWeight:"100",color:"gray" }}
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
