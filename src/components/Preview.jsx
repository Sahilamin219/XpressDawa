import React from "react";
import { Ref, Button, Container, Divider, Visibility, onItemClick, List, Grid, Segment, Label } from "semantic-ui-react";


import Banner from "./Banner";
import Navbar from "./Navbar";
import StickyNavbar from "./Navbar";
import Features from "./Features";
import Footer from "./Footer";


function handleClick3()
{
  console.log('pressed Reorder');
}

export default function Preview() {
  return (
    <React.Fragment>
      <div>
      <Navbar/>
      <Banner />
      <Segment>
      <Container
            textAlign="center"
            style={{
              right: "0",
              width: "100%",
            }}
          >
            <Button color="blue" onClick={handleClick3}>Order By Searching Medicines</Button>
            <p></p>
            <Button color="blue" onClick={handleClick3}>Start your Order By Uploading Prescription</Button>
      </Container>
      </Segment>
      <Segment>
      <p>
        <Label ribbon color="green" size="large" style={{
            marginLeft : "6.5em",
            width : "70%"
            }}>Want to order from previous purchase </Label> 
      </p>
      <Grid
      style={{
        bottom:'0'
      }}>
        <Grid.Column textAlign="center">
          <Button color="blue">Re-Order from recents</Button>
        </Grid.Column>
      </Grid>
    </Segment>
    <p style={{marginLeft : "3.em"}} id="fonts">You can also contact us on <b>911-003-7097</b></p>
      <Footer />
      </div>
    </React.Fragment>
  );
}
/*
<Route render={({ history}) => (
<YourComponent onClick={() => { history.push('/new-route') }}>
    <SomeIcon />
</YourComponent>
)} />
*/