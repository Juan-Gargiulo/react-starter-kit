import React from 'react';
import NavBar from 'js/views/layout/navbar';

export default ({ children }) => (
  <div>
    <NavBar />
    {children}
  </div>
);
