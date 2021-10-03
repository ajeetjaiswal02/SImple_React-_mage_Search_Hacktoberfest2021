import React from "react";


import Particles from "react-particles-js";

export default function ParticleBackground() {
  return (
    <div style={{ backgroundColor: "#021b39" }}>
      <Particles
        style={{ position: "absolute" }}
        height="100%"
        width="100%"
        params={{
          particles: {
            color: {
              value: "#000000"
            },
            line_linked: {
              color: {
                value: "#000000"
              }
            },
            number: {
              value: 50
            },
            size: {
              value: 3
            }
          }
        }}
      />
    </div>
  );
}
