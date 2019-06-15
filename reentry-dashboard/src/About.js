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
      <iframe
        title={uuidv4()}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/PhqBx2A1hzY?start=5"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen />
    </div>
  );
}