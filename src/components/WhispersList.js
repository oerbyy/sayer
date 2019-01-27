import React, {Component} from 'react';
import PropTypes from 'prop-types';

import dataService from '../services/dataService';

export class WhispersList extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    let persistedData = localStorage.getItem('Sayer');

    if (persistedData) {
      let parsedData = JSON.parse(persistedData);

      this.setState({whispers: parsedData});
    } else {
      let stubData = dataService.getStubsData();

      localStorage.setItem('Sayer', JSON.stringify(stubData));
      this.setState({whispers: stubData.whispers});
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="header-block">
          <div className="container-flex-col">
            <h1 className="heading-brand">Sayer</h1>
            <h5 className="heading-brand-small">World's most user time waster</h5>
          </div>
        </div>
        <div className="item-block">
          <div className="button-text">First item with customize...</div>
          <div className="item-circle">
            <div className="button-text white">42</div>
          </div>
        </div>
        <div className="item-block">
          <div className="button-text">Second Item</div>
          <div className="item-delete-pink">
            <div className="button-text white">Delete</div>
          </div>
        </div>
        <div className="item-block">
          <div className="button-text">Third item (short one)</div>
          <div className="item-circle">
            <div className="button-text white">19</div>
          </div>
        </div>
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
