import React from "react";
import { Segment, Grid, Container, Header, List } from "semantic-ui-react";
export default function Footer() {
  return (
    <Segment vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header as="h4" content="Important Links" />
              <List link>
                <List.Item as="a">Frequenctly Asked Questions (FAQs)</List.Item>
                <List.Item as="a">Privacy Policy</List.Item>
                <List.Item as="a">Terms & Conditions</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header as="h4" content="Other Services" />
              <List link>
                <List.Item as="a">First Aid Drugs</List.Item>
                <List.Item as="a">Medicne Home Delivery</List.Item>
                <List.Item as="a">Periodic Drug Orders</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4">&#169; 2020 Xpressdawa Ltd.</Header>
              <p>
                For any details or quries, contact on <br /> +91 9110037097
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
}