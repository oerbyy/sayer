import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import {Link} from 'react-router-dom';

export class NewWhisper extends Component {
  static propTypes = {
    nextWhisperId: PropTypes.number.isRequired,
    addWhisper: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      whisperTitle: ''
    };

    autoBind(this);
  }

  addWhisper(whisperId) {
    if (!this.state.whisperTitle) return;

    let newWisper = {
      id: whisperId,
      title: this.state.whisperTitle,
      comments: [],
      commentsCount: 0,
      isDeleted: false
    };

    this.props.addWhisper(newWisper);

    this.setState({whisperTitle: ''});
  }

  handleInputChange(e) {
    this.setState({
      whisperTitle: e.target.value
    });
  }

  handleEnterPress(whisperId, e) {
    if (e.keyCode === 13) {
      this.addWhisper(whisperId);
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="header-block">
          <div className="container-flex-row">
            <Link to={`/whispers`} className="item-circle link">
              <div className="item-text white">⟵</div>
            </Link>
            <h2 className="heading-item">Create new item</h2>
          </div>
        </div>
        <div className="item-new-block">
          <div className="container-flex-row">
            <input
              type="text"
              name="add_whisper"
              className="input-item input-text"
              placeholder="New item title..."
              value={this.state.whisperTitle}
              onChange={this.handleInputChange}
              onKeyUp={e => this.handleEnterPress(this.props.nextWhisperId, e)}
              maxLength="150"
            />

            <div
              className="item-circle link"
              onClick={_ => this.addWhisper(this.props.nextWhisperId)}
            >
              <div className="item-text white">&gt;</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NewWhisper;
