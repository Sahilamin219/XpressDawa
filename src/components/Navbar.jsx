import React from "react";
import { Menu, Sticky } from "semantic-ui-react";

export default function StickyNavbar({ contextRef }) {
  return (
    <Sticky context={contextRef}>
      <Menu
        attached="top"
        tabular
        style={{ backgroundColor: "#fff", paddingTop: "1em" }}
      >
        <Menu.Item as="a" name="Help" />
        <Menu.Item as="a" name="Sign In" />
        <Menu.Menu position="right">
          <Menu.Item>
            <img src="https://dxh0xeyowrxer.cloudfront.net/site-static/icons/whatsapp.svg" />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </Sticky>
  );
}