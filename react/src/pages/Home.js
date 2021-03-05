import React from 'react';
import Welcome from './Welcome';
export default function() {
  return (
    <div id="home">
      <h2 className="app-nav-item" style={{ borderColor: 'red' }}>
        Home撒打算大苏打 阿迪斯
      </h2>
      <Welcome name="Nuomi" date={new Date()}></Welcome>,
    </div>
  );
}
