import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import {Link} from 'react-router-dom';

export class WhisperDetails extends Component {
  static propTypes = {
    whispers: PropTypes.array.isRequired,
    addComment: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      commentText: ''
    };

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

  addComment(whisperId) {
    if (!this.state.commentText) return;

    this.props.addComment(whisperId, this.state.commentText);

    this.setState({commentText: ''});
  }

  handleInputChange(e) {
    this.setState({
      commentText: e.target.value
    });
  }

  handleEnterPress(whisperId, e) {
    if (e.keyCode === 13) {
      this.addComment(whisperId);
    }
  }

  renderComments(comments) {
    return (
      comments.length > 0 &&
      comments.map((comment, index) => (
        <div key={index} className="item-details-block">
          <div className="container-flex-row">
            <div className="item-square" />
            <p className="common-text">{comment}</p>
          </div>
        </div>
      ))
    );
  }

  render() {
    const whisper = this.getWhisperDetais(this.props.match.params.id);

    return (
      <React.Fragment>
        <div className="header-block">
          <div className="container-flex-row">
            <Link to={`/whispers`} className="item-circle link">
              <div className="item-text white">⟵</div>
            </Link>
            <h2 className="heading-item">{whisper.title}</h2>
          </div>
        </div>

        {this.renderComments(whisper.comments)}

        {!whisper.isNotFound && (
          <div className="item-new-comment-block">
            <div className="container-flex-row">
              <input
                type="text"
                name="add_comment"
                className="input-item input-text"
                placeholder="New comment goes here..."
                value={this.state.commentText}
                onChange={this.handleInputChange}
                onKeyUp={e => this.handleEnterPress(whisper.id, e)}
                maxLength="150"
              />
              <div className="item-circle link" onClick={_ => this.addComment(whisper.id)}>
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
