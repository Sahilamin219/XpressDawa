import React from "react";
import { Container } from "semantic-ui-react";

export default function Features() {
  return (
    <Container text>
      <h2
        style={{
          marginBottom: ".35em",
          color: "#00334d",
          fontSize: "1.7rem",
          fontWeight: "500",
          fontFamily: "Tiempos Headline,Georgia,serif",
          lineHeight: "1.1em",
          letterSpacing: ".01em"
        }}
      >
        Genuine Medicine
      </h2>
      <p style={{ margin: "0.35em" }}>
        We take utmost effort to ensure the you get only 100% genuine medicine.
        We get your medicines delivered only through from the authorized
        channels{" "}
      </p>

      <h2
        style={{
          marginBottom: ".35em",
          color: "#00334d",
          fontSize: "1.7rem",
          fontWeight: "500",
          fontFamily: "Tiempos Headline,Georgia,serif",
          lineHeight: "1.1em",
          letterSpacing: ". 01em"
        }}
      >
        Contactless Delivery
      </h2>
      <p style={{ margin: "0.35em" }}>
        In this time of great pandemic, we are bound to take care of your
        safety. We provide contactless delivery to ensure your safety. Also, we
        provide our delivery boys all the necessary safety gears.{" "}
      </p>

      <h2
        style={{
          marginBottom: ".35em",
          color: "#00334d",
          fontSize: "1.7rem",
          fontWeight: "500",
          fontFamily: "Tiempos Headline,Georgia,serif",
          lineHeight: "1.1em",
          letterSpacing: ".01em"
        }}
      >
        Ease of Ordering
      </h2>
      <p style={{ margin: "0.35em" }}>
        We understand that not everyone is comfortable with Apps. For your ease,
        we have multiple ordering methods like- calls, whatsapp message, online
        ordering. We are online Pharmacy with a local touch from your city.
      </p>
    </Container>
  );
}