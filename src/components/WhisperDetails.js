import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import {Link} from 'react-router-dom';

export class WhisperDetails extends Component {
  static propTypes = {
    whispers: PropTypes.array
  };

  constructor(props) {
    super(props);

    autoBind(this);
  }

  getWhisperDetais(id) {
    let whisper = {
      id,
      title: `404: The whisper #${id} is NOT FOUND`,
      comments: [],
      isNotFound: true
    };

    if (this.props.whispers && this.props.whispers.length > 0) {
      for (const item of this.props.whispers) {
        if (Number(item.id) === Number(id)) {
          return item;
        }
      }
    }

    return whisper;
  }

  renderComments(comments) {
    return (
      comments.length > 0 &&
      comments.map(comment => (
        <div key={comment.id} className="item-details-block">
          <div className="container-flex-row">
            <div className="item-square" />
            <p className="common-text">{comment.commentText}</p>
          </div>
        </div>
      ))
    );
  }

  render() {
    console.log('WhisperDetails PROPS', this.props);

    const whisper = this.getWhisperDetais(this.props.match.params.id);
    console.log('whisper', whisper);

    return (
      <React.Fragment>
        <div className="header-block">
          <div className="container-flex-row">
            <Link to={`/whispers`} className="item-circle">
              <div className="item-text white">⟵</div>
            </Link>
            <h2 className="heading-item">{whisper.title}</h2>
          </div>
        </div>

        {this.renderComments(whisper.comments)}

        {!whisper.isNotFound && (
          <div className="item-new-comment-block">
            <div className="container-flex-row">
              <div className="input-item">
                <div className="input-text">New comment goes here...</div>
              </div>
              <div className="item-circle">
                <div className="item-text white"> > </div>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default WhisperDetails;
