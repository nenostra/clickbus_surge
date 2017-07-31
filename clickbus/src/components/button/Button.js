import React from 'react';

export const Button = ({ handleClick, children, from}) => (
  <div>
    <button onClick={handleClick}>{children}</button>
  </div>
)
