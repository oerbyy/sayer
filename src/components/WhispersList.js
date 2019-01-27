import React, {Component} from 'react';
import autoBind from 'react-autobind';

import dataService from '../services/dataService';

export class WhispersList extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {};

    autoBind(this);
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

  renderWhispersList() {
    return (
      this.state.whispers &&
      this.state.whispers.map(whisper => (
        <div className="item-block" key={whisper.id}>
          <div className="item-text">{whisper.title}</div>
          <div className="container-item-controls">
            <div className="item-circle">
              <div className="item-text white">{whisper.commentsCount}</div>
            </div>
            <div className="item-delete-pink">
              <div className="item-text white">Delete</div>
            </div>
          </div>
        </div>
      ))
    );
  }

  render() {
    console.log('localStorage', localStorage);
    console.log('STATE', this.state);
    console.log('PROPS', this.props);

    return (
      <React.Fragment>
        <div className="header-block">
          <div className="container-flex-col">
            <h1 className="heading-brand">Sayer</h1>
            <h5 className="heading-brand-small">World's most user time waster</h5>
          </div>
        </div>

        {this.renderWhispersList()}

        <div className="add-item-block">
          <div className="item-circle-add">
            <div className="item-text-plus white">+</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default WhispersList;
