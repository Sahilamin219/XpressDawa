import React from "react";

export default function Banner() {
  return (
    <React.Fragment>
      <div style={{ margin: "2em" }}>
        <img
          src="https://static.wixstatic.com/media/dcd19c_7589201a575746b69c18ab02aeda06d4~mv2.png/v1/fill/w_130,h_110,al_c,q_85,usm_0.66_1.00_0.01/WhatsApp_Image_2019-10-22_at_2-removebg-.webp"
          width="85"
        />
      </div>

      <h1
        style={{
          marginBottom: ".35em",
          color: "#00334d",
          fontSize: "2.375rem",
          fontWeight: "500",
          fontFamily: "Tiempos Headline,Georgia,serif",
          lineHeight: "1.1em",
          letterSpacing: ".01em"
        }}
      >
        Your medication, sorted and delivered
      </h1>
      <p
        style={{
          margin: "0.35em",

          padding: "0em 2.35em 2.35em 0em",
          fontFamily: "italic"
        }}
      >
        <em>We delivery medicines within 24hrs of ordering</em>
      </p>
    </React.Fragment>
  );
}