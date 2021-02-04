import React from "react";
import "../styles.css";
import "semantic-ui-css/semantic.min.css";
import { Ref, Button, Container, Divider, Visibility, onItemClick, List } from "semantic-ui-react";
import Banner from "./Banner";
import StickyNavbar from "./Navbar";
import Features from "./Features";
import Footer from "./Footer";
import Preview from './Preview';

import {Link} from 'react-router-dom';

export default function Homepage() {

  const contextRef = React.createRef();
  const innerContextRef = React.createRef();

  const [ctaVisible, setCtaVisible] = React.useState(true);


  function handleClick(props) {
    // console.log(props);
    console.log('order now button pressed');
    props.history.push('/navigation');
  }
  function handleUpdate(e, { calculations }) {
    setCtaVisible(calculations.topVisible);
  }

  return (
    <React.Fragment>
      <Ref innerRef={innerContextRef}>
        <div ref={contextRef}>
          <StickyNavbar contextRef={contextRef} />
          <Container fluid>
            <Banner />
            <Visibility onUpdate={handleUpdate} onClick={handleClick}>
              <Button color="blue" size="large" onClick={handleClick}>
                Order Now
              </Button>
            </Visibility>
          </Container>
          <Divider />
          <Features/>
          <Divider />
          <Footer />
          <Container
            textAlign="right"
            style={{
              position: "fixed",
              right: "0",
              bottom: "0",
              width: "100%",
              display: ctaVisible ? "none" : "inherit"
            }}
          >
          <Link to = '/navi'>
            <Button color="blue" onClick={handleClick}>Order Now</Button>
          </Link>
          </Container>
        </div>
      </Ref>
    </React.Fragment>
  );
}