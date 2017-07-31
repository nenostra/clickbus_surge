import React, { Component } from 'react';
//import ButtonContainer from './components/button/ButtonContainer';
import TripContainer from './components/trip/TripContainer';
import SearchForm from './components/form/SearchForm'
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  static contextTypes = {
        store: PropTypes.object.isRequired,
    }

  componentDidMount() {
    this.context.store.dispatch({type: 'RANDOM_PLACE'})
	}

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={SearchForm}/>
            <Route path="/results" component={TripContainer}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
