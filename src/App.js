import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  static propTypes = {
    routes: PropTypes.array.isRequired
  };

  render() {
    return (
      <div className="App">
        <Switch>
          {this.props.routes.map((route, index) => (
            <Route key={index} exact={route.exact} path={route.path} render={route.main} />
          ))}
        </Switch>
      </div>
    );
  }
}

export default App;
