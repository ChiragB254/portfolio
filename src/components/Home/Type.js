import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "DEVELOPER",
          "MENTOR",
          "LEARNER",
          "AI/ML ENGINEER",
          "DEEP LEARNING ENGINEER",
          "FULL STACK DEVELOPER",
          "CRYPTO VERSE EXPLORER",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
