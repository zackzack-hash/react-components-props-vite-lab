import React from "react";

function About({ image = "", about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p> { "i'm a digital nomad exploring the intersection of culture and code" }</p>
    </aside>
  );
}

export default About;