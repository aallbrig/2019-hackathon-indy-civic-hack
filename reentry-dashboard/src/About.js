import React from "react";

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export default function About() {
  return (
    <div>
      <h2>About</h2>

      <h4>Soteria</h4>

      <iframe
        title={uuidv4()}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/PhqBx2A1hzY?start=5"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen />

      <p>
        Soteria, in Greek mythology, is the Goddess of salvation and safe passage. Our team selected her to represent
        our team's solution because she best captures the values one should have when helping someone who has gone
        through the criminal justice system.
      </p>
    </div>
  );
}