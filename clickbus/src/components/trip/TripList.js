import React from 'react';
import { Trip } from './Trip'

export const TripList = ({ route }) => (
  <div>
    {route.length > 0 && <p>Trips for the date {route[0].parts[0].departure.waypoint.schedule.date}</p>}
    <br/>
    <ul>
      {route.map((trip, index) => (
        <Trip
          key={index}
          from={trip.from}
          to={trip.to}
          timeDeparture={trip.parts[0].departure.waypoint.schedule.time}
          timeArrival={trip.parts[0].arrival.waypoint.schedule.time}
        />
      ))}
    </ul>
  </div>
)
