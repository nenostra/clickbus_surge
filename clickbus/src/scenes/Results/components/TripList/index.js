import React from 'react';
import Trip from './components/Trip';

const TripList = ({ route, handleClick }) => (
  <div>
    {route.length > 0 && <p>Trips for the date {route[0].parts[0].departure.waypoint.schedule.date}</p>}
    <ul style={{padding: '0'}}>
      {route.map((trip, index) => (
        <Trip
          handleClick={handleClick}
          key={index}
          from={trip.from}
          to={trip.to}
          timeDeparture={trip.parts[0].departure.waypoint.schedule.time}
          timeArrival={trip.parts[0].arrival.waypoint.schedule.time}
        />
      ))}
    </ul>
  </div>
);

export default TripList;
