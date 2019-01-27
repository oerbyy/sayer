import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class NewWhisper extends Component {
  static propTypes = {};

  render() {
    return (
      <React.Fragment>
        <div className="header-block">
          <div className="container-flex-row">
            <div className="item-circle">
              <div className="item-text white">⟵</div>
            </div>
            <h2 className="heading-item">Create new item</h2>
          </div>
        </div>
        <div className="item-new-block">
          <div className="container-flex-row">
            <div className="input-item">
              <div className="input-text">New item title...</div>
            </div>
            <div className="item-circle">
              <div className="item-text white">&gt;</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NewWhisper;
