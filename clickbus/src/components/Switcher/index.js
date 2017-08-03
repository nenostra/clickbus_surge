import React from 'react';
import Home from '../../scenes/Home';
import Results from "../../scenes/Results/index";
import { connect } from 'react-redux';

export const routesMap = {
    HOME: '/',
    RESULTS: '/results',
    SEAT_MAP: '/seat_map'
};

const pages = {
  homePage: Home,
  resultsPage: Results,
  /*seatMapPage: SeatMap*/
};

const Switcher = ({ page }) => {
  const Page = pages[page];
  return Page ? <Page /> : null
};

const mapState = ({ page }) => ({ page });

export default connect(mapState)(Switcher);
