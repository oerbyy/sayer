import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import dataService from './services/dataService';
import './App.css';

import WhispersList from './components/WhispersList';
import WhisperDetails from './components/WhisperDetails';
import NewWhisper from './components/NewWhisper';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    let persistedData = localStorage.getItem('Sayer');

    if (persistedData) {
      let parsedData = JSON.parse(persistedData);

      this.setState({whispers: parsedData.whispers});
    } else {
      let stubData = dataService.getStubsData();

      localStorage.setItem('Sayer', JSON.stringify(stubData));
      this.setState({whispers: stubData.whispers});
    }
  }

  render() {
    console.log('APP localStorage', localStorage);
    console.log('APP STATE', this.state);
    console.log('APP PROPS', this.props);

    return (
      <div className="section-main container-main">
        <Switch>
          <Route
            path="/whispers/:id"
            exact={true}
            render={props => <WhisperDetails {...props} />}
          />
          <Route path="/whispers" exact={true} render={props => <WhispersList {...props} whispers={this.state.whispers} />} />
          <Route path="/whisper-new" exact={true} render={props => <NewWhisper {...props} />} />
          <Redirect to="/whispers" />
        </Switch>
      </div>
    );
  }
}

export default App;
