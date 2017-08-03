import React from 'react';

const divStyle = {
    border: '1px solid #e0d8ce',
    marginBottom: '5px',
    height: '110px',
    fontSize: '12px'
};

const nextStyle = {
    borderLeft: '1px',
    width: '15%',
    height: '100%',
    backgroundColor: '#008bc1',
    float: 'right'
}

const Trip = ({ from, to, timeDeparture, timeArrival, handleClick }) => (
  <div style={divStyle}>
      <div style={nextStyle} onClick={handleClick} ><p style={{position: 'relative', top: '30%'}}>{">>"}</p></div>
    <p>{timeDeparture} --->{timeArrival}</p>
    <p>{from}</p>
    <p>{to}</p>
  </div>
);

export default Trip;
