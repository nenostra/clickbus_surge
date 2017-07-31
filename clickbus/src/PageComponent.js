import React from 'react';
import TripContainer from './components/trip/TripContainer';
import SearchForm from './components/form/SearchForm';
import { connect } from 'react-redux';

const pages = {
  homePage: SearchForm,
  resultsPage: TripContainer
}

const PageComponent = ({ page }) => {
  const Page = pages[page]
  return Page ? <Page /> : null
}

const mapState = ({ page }) => ({ page })

export default connect(mapState)(PageComponent)
