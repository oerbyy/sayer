import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

export class WhispersList extends Component {
  static propTypes = {
    whispers: PropTypes.array
  };

  constructor(props) {
    super(props);

    this.state = {};

    autoBind(this);
  }

  renderWhispersList() {
    return (
      this.props.whispers &&
      this.props.whispers.map(whisper => (
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
    console.log('WhispersList PROPS', this.props);

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
