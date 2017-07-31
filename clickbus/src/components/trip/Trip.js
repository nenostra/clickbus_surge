import React from 'react';

export const Trip = ({ from, to, timeDeparture, timeArrival }) => (
  <div>
    <p>{timeDeparture} --->{timeArrival}</p>
    <p>{from}</p>
    <p>{to}</p>
    <p>----------------------------</p>
  </div>
)
