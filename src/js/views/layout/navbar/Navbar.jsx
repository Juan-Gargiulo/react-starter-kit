import React from 'react';
import { Link } from 'react-router-dom';
import navBarItems from './items';

export default () => (
  <ul>
    {navBarItems.map((item) => (
      <Link to={item}>
        <li>{item.label}</li>
      </Link>
    ))}
  </ul>
);
