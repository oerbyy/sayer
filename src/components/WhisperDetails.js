import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class WhisperDetails extends Component {
  static propTypes = {};

  render() {
    return (
      <React.Fragment>
        <div className="header-block">
          <div className="container-flex-row">
            <div className="item-circle">
              <div className="button-text white">⟵</div>
            </div>
            <h2 className="heading-item">First item with customized long title</h2>
          </div>
        </div>
        <div className="item-details-block">
          <div className="container-flex-row">
            <div className="item-square" />
            <p className="common-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
              eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
              nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id
              rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
        </div>
        <div className="item-details-block">
          <div className="container-flex-row">
            <div className="item-square pinked" />
            <p className="common-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
              eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
              nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id
              rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
        </div>
        <div className="item-new-comment-block">
          <div className="container-flex-row">
            <div className="input-item">
              <div className="input-text">New comment goes here...</div>
            </div>
            <div className="item-circle">
              <div className="button-text white">⟵</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default WhisperDetails;
