import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import {Link} from 'react-router-dom';

export class WhispersList extends Component {
  static propTypes = {
    whispers: PropTypes.array.isRequired,
    deleteWhisper: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {};

    autoBind(this);
  }

  renderWhispersList() {
    return (
      this.props.whispers &&
      this.props.whispers
        .filter(whisper => !whisper.isDeleted)
        .map(whisper => (
          <div className="item-block" key={whisper.id}>
            <Link to={`/whispers/${whisper.id}`} className="item-text" title="View comments">
              {whisper.title}
            </Link>

            <div className="container-item-controls">
              <div className="item-circle">
                <div className="item-text white">{whisper.commentsCount}</div>
              </div>
              <div
                className="item-delete-pink link"
                onClick={_ => this.props.deleteWhisper(whisper.id)}
              >
                <div className="item-text white">Delete</div>
              </div>
            </div>
          </div>
        ))
    );
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

        {this.renderWhispersList()}

        <div className="add-item-block">
          <Link to={`/whisper-new`} className="item-circle-add" title="Add new whisper">
            <div className="item-text-plus white">+</div>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default WhispersList;
